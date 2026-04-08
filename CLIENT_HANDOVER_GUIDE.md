# Dr. Grover's Dental Clinic - Website Handover Document

## Overview
This document contains all the information needed to manage and maintain your dental clinic website.

---

## 🌐 Website Access

### Live Website
**URL:** https://drgroversclinic.netlify.app

### Custom Domain (Optional)
If you want a custom domain like `drgroversclinic.com`:
1. Buy domain from GoDaddy/Namecheap (₹800-1000/year)
2. Ask your developer to connect it to Netlify
3. SSL certificate is FREE on Netlify

---

## 📊 Appointments System - Google Sheets

Your website now automatically saves all appointment requests to a Google Sheet.

### How It Works
1. Patient fills form on website
2. Data saves to Google Sheet instantly
3. WhatsApp message sent to your phone
4. Email notification sent to your email

### To Access Your Appointments Sheet:

**Step 1:** Open the Google Sheet link (ask your developer)

**Step 2:** Make a copy for yourself
- File → Make a copy → Save to your Google Drive

**Step 3:** Share with your team
- Click "Share" → Add team member emails

### Sheet Columns Explained
| Column | What It Shows |
|--------|---------------|
| Sr. No. | Serial number (auto-increment) |
| Date & Time | When patient submitted the form |
| Name | Patient's full name |
| Phone | Patient's phone number |
| Email | Patient's email (optional) |
| Service | Type of dental service needed |
| Appointment Date | Preferred appointment date |
| Appointment Time | Preferred appointment time |
| Message | Any additional message |

### Sheet Features
- **Auto-updates** - New appointments appear automatically
- **Easy to filter** - Use dropdown filters to sort by date/service
- **Print-friendly** - Print or export as PDF for records
- **Mobile access** - View on phone via Google Sheets app

---

## 📱 Notifications You Receive

### WhatsApp
- Instant notification when someone books
- Contains all patient details
- Tap to call patient directly

### Email (Optional)
- Detailed appointment notification
- Check spam folder initially
- Forward to staff if needed

---

## 🔧 How to Update Content

### Update Phone Number / Address
Ask your developer to make these changes (free within warranty period).

### Update Doctor Photos
1. Prepare photos (high quality, square crop)
2. Share with developer
3. They'll update within 24 hours

### Add/Remove Services
Contact your developer with the list.

### Update Timing
1. Prepare new timings
2. Share with developer
3. Changes made within 24 hours

---

## 💰 Maintenance & Costs

### Yearly Costs
| Item | Cost | Who Pays |
|------|------|----------|
| Netlify Hosting | FREE | Developer |
| SSL Certificate | FREE | Included |
| Domain (if custom) | ₹800-1000 | Client |
| Developer Support | ₹2000-5000/year | Client (optional) |

### Support Period
- **Free Support:** 30 days from launch
- **Paid Support:** Available on request

---

## 📁 Technical Details (For Developer Reference)

### Files
- `index.html` - Main website file
- `style.css` - Styling/design
- `script.js` - Interactive features

### Integrations
- Google Sheets (appointments)
- WhatsApp API (notifications)
- Netlify (hosting)

### Google Apps Script URL
```
DEPLOY AS WEB APP AND PASTE URL HERE
```

---

## 🆘 Troubleshooting

### Appointment Not Showing in Sheet?
1. Check internet connection
2. Check spam folder for emails
3. Contact developer

### WhatsApp Not Opening?
1. Ensure WhatsApp is installed
2. Check browser popup settings

### Form Not Submitting?
1. Clear browser cache
2. Try different browser
3. Contact developer

---

## 👤 Developer Contact

**Name:** [Your Name]
**Email:** [Your Email]
**Phone:** [Your Phone]
**WhatsApp:** [Your WhatsApp]

---

## ✅ Launch Checklist

Before going live, ensure:
- [ ] Google Sheet created and accessible
- [ ] WhatsApp number verified
- [ ] All contact info correct
- [ ] Clinic photos replaced (if any)
- [ ] Social media links added
- [ ] Domain connected (if custom)

---

## 📅 Future Upgrades (Optional)

Your developer can add:
- [ ] Patient login portal
- [ ] SMS notifications
- [ ] Calendar integration
- [ ] Online payment
- [ ] Video consultation booking
- [ ] Before/after photo gallery
- [ ] Blog/news section

---

*Document prepared by: Your Developer*
*Date: [Today's Date]*
*Version: 1.0*
