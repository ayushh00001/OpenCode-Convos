// ==========================================
// DR. GROVER'S DENTAL CLINIC - GOOGLE APPS SCRIPT
// This script saves appointment form submissions to Google Sheets
// ==========================================

const SHEET_NAME = 'Appointments';

// Column headers for the sheet
const HEADERS = ['Sr. No.', 'Date & Time', 'Name', 'Phone', 'Email', 'Service', 'Appointment Date', 'Appointment Time', 'Message'];

// Web app entry point - handles POST requests from the website form
function doPost(e) {
  try {
    const sheet = getSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Get next serial number
    const lastRow = sheet.getLastRow();
    const srNo = lastRow === 1 ? 1 : sheet.getRange(lastRow, 1).getValue() + 1;
    
    // Prepare row data
    const rowData = [
      srNo,
      data.submittedAt || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      data.name || '',
      data.phone || '',
      data.email || 'Not provided',
      formatService(data.service),
      formatDate(data.date),
      formatTime(data.time),
      data.message || 'No message'
    ];
    
    // Append to sheet
    sheet.appendRow(rowData);
    
    // Format the new row
    formatRow(sheet, lastRow + 1);
    
    // Send email notification
    sendEmailNotification(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Get or create the appointments sheet
function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    
    // Add headers
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    
    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
    headerRange.setBackground('#0066FF');
    headerRange.setFontColor('#FFFFFF');
    headerRange.setFontWeight('bold');
    headerRange.setHorizontalAlignment('center');
    
    // Freeze header row
    sheet.setFrozenRows(1);
    
    // Set column widths
    sheet.setColumnWidth(1, 70);   // Sr. No.
    sheet.setColumnWidth(2, 160);  // Date & Time
    sheet.setColumnWidth(3, 150);  // Name
    sheet.setColumnWidth(4, 120);  // Phone
    sheet.setColumnWidth(5, 180);  // Email
    sheet.setColumnWidth(6, 150);  // Service
    sheet.setColumnWidth(7, 140);  // Appointment Date
    sheet.setColumnWidth(8, 140);  // Appointment Time
    sheet.setColumnWidth(9, 250);  // Message
  }
  
  return sheet;
}

// Format service value to readable text
function formatService(service) {
  const services = {
    'consultation': 'General Consultation',
    'orthodontics': 'Orthodontics / Braces',
    'implants': 'Dental Implants',
    'cosmetic': 'Cosmetic Dentistry',
    'rct': 'Root Canal Treatment',
    'crowns': 'Crowns & Bridges',
    'extraction': 'Tooth Extraction',
    'pediatric': 'Pediatric Dentistry',
    'emergency': 'Dental Emergency',
    'other': 'Other'
  };
  return services[service] || service || 'Not specified';
}

// Format date to readable format
function formatDate(dateStr) {
  if (!dateStr) return 'Not set';
  const date = new Date(dateStr);
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-IN', options);
}

// Format time to readable format
function formatTime(time) {
  if (!time) return 'Not set';
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
}

// Format new row styling
function formatRow(sheet, row) {
  const range = sheet.getRange(row, 1, 1, HEADERS.length);
  
  // Alternating row colors
  if (row % 2 === 0) {
    range.setBackground('#F8FAFC');
  }
  
  // Format phone number as text (preserve leading zeros if any)
  sheet.getRange(row, 4).setNumberFormat('@STRING@');
  
  // Set horizontal alignment
  range.setHorizontalAlignment('left');
}

// Send email notification to clinic
function sendEmailNotification(data) {
  const recipientEmail = 'drgroversclinic@gmail.com';
  const subject = `New Appointment Request - ${data.name}`;
  
  const body = `
Dear Dr. Grover's Clinic,

A new appointment request has been received!

Patient Details:
----------------
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || 'Not provided'}
Service: ${formatService(data.service)}
Preferred Date: ${formatDate(data.date)}
Preferred Time: ${formatTime(data.time)}

Message:
${data.message || 'No message provided'}

---
Submitted: ${data.submittedAt || new Date().toString()}

This is an automated notification from your website.
  `.trim();
  
  try {
    MailApp.sendEmail(recipientEmail, subject, body);
  } catch (e) {
    // Email failed, but don't break the form submission
    console.log('Email notification failed: ' + e.toString());
  }
}

// ==========================================
// SETUP FUNCTION - Run this once to initialize
// ==========================================
function setupSheet() {
  const sheet = getSheet();
  SpreadsheetApp.getActiveSpreadsheet().rename('Dr. Grover\'s Appointments');
  
  // Add sample data row to show format
  if (sheet.getLastRow() === 1) {
    const sampleRow = [
      1,
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      'Sample Patient',
      '+91 98735 54684',
      'patient@email.com',
      'General Consultation',
      new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' }),
      '10:00 AM',
      'This is a sample entry for demonstration'
    ];
    sheet.appendRow(sampleRow);
    formatRow(sheet, 2);
  }
  
  Logger.log('Sheet setup complete!');
}

// ==========================================
// TEST FUNCTION - Test the script
// ==========================================
function testSubmission() {
  const mockData = {
    name: 'Test Patient',
    phone: '+91 98735 54684',
    email: 'test@example.com',
    service: 'consultation',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '10:00',
    message: 'Test appointment booking',
    submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };
  
  // Simulate the POST request
  const mockEvent = {
    postData: {
      contents: JSON.stringify(mockData)
    }
  };
  
  doPost(mockEvent);
  Logger.log('Test submission complete! Check your sheet.');
}
