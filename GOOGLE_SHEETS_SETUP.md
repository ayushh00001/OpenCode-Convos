# ==========================================
# GOOGLE SHEETS SETUP GUIDE FOR DEVELOPER
# ==========================================

## STEP 1: Create Google Sheet

1. Go to: https://sheets.google.com
2. Click "Blank" to create new sheet
3. Name it: "Dr. Grover's Appointments"
4. Share with client's email (view only access)
5. Copy the Sheet URL

Example URL:
```
https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
```

COPY THE SHEET ID (the long string between /d/ and /edit)

---

## STEP 2: Set Up Google Apps Script

1. In your Google Sheet, click:
   **Extensions → Apps Script**

2. Delete any code in the editor

3. Copy the entire code from:
   `google-apps-script.js`

4. Paste it into the Apps Script editor

5. Click 💾 Save (or Ctrl+S)

---

## STEP 3: Deploy as Web App

1. Click "Deploy" button (top right)
2. Select "New deployment"
3. Click ⚙️ gear icon next to "Select type"
4. Choose "Web app"
5. Fill in:
   - Description: "Appointment Form Handler"
   - Execute as: "Me"
   - Who has access: "Anyone"
6. Click "Deploy"
7. Click "Authorize access"
8. Select your Google account
9. Click "Allow"
10. **COPY THE WEB APP URL** (looks like: `https://script.google.com/macros/s/XXXXX/exec`)

---

## STEP 4: Update Your Website Code

1. Open `script.js` file

2. Find this line:
   ```
   const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL';
   ```

3. Replace `YOUR_GOOGLE_SCRIPT_URL` with your Web App URL:
   ```
   const scriptURL = 'https://script.google.com/macros/s/YOUR_ID_HERE/exec';
   ```

4. Save the file

5. Push to GitHub:
   ```
   git add .
   git commit -m "Added Google Sheets integration"
   git push
   ```

6. Netlify will auto-deploy

---

## STEP 5: Test the System

1. Open your website
2. Fill out the appointment form (use your own phone number)
3. Submit the form
4. Check:
   - ✅ WhatsApp opened with correct message
   - ✅ Data appeared in Google Sheet
   - ✅ Email received (check spam)

---

## STEP 6: Share with Client

1. Open the Google Sheet
2. Click "Share" button
3. Add client's email
4. Set permission: "Viewer" (can view, can't edit)
5. Send them the handover guide document

---

## QUICK REFERENCE

### What Client Gets:
- Google Sheet (read-only) - View all appointments
- WhatsApp notification - Instant booking alerts
- Email notification - Backup alerts

### What Client Cannot Do:
- Edit the website
- Access GitHub
- Modify the form

### What Only Developer Can Do:
- Change website content
- Update styling
- Modify integrations

---

## TESTING CHECKLIST

- [ ] Form submits successfully
- [ ] WhatsApp opens with correct data
- [ ] Data appears in Google Sheet
- [ ] Serial number auto-increments
- [ ] Date formats correctly
- [ ] Service names display properly
- [ ] Email notification works (check spam)

---

## COMMON ISSUES & FIXES

### Issue: "Failed to fetch" error
**Fix:** Check if Web App URL is correct and deployed

### Issue: Sheet not updating
**Fix:** 
1. Check Apps Script for errors (View → Execution Log)
2. Re-deploy the web app
3. Check sheet sharing settings

### Issue: Email not sending
**Fix:** 
1. Email sending requires proper authorization
2. Check if email in script matches authorized account
3. Check spam folder

---

## SUPPORT

For issues, check:
1. Google Sheet → Extensions → Apps Script → Execution Log
2. Browser console (F12 → Console tab)
3. Netlify deploy logs

---

*End of Setup Guide*
