# EmailJS Setup Guide for CVS Capital Contact Form

## Contact Form Complete! ✅

Your contact page infrastructure is now complete with:
- Contact form with validation (Zod + React Hook Form)
- Professional form components (Input, Textarea, Select with lead qualification)
- Dual email functionality (internal notification + auto-response)
- Complete page sections following your modular architecture
- Office information (10775 Double R Blvd, Reno, NV 89521)
- Business hours (8AM-5PM Pacific Time)
- FINRA-compliant disclaimers and privacy information

## EmailJS Configuration Required

To activate the contact form email functionality, complete these steps:

### 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (supports 200 emails/month)
3. Connect your Gmail or business email account

### 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or your business email provider
4. Follow the connection steps
5. Note your **Service ID** (e.g., 'service_abc123')

### 3. Create Email Templates

#### Internal Notification Template:
```
Template Name: CVS Capital Contact Form Notification
Template ID: template_contact_form

Subject: New Contact Form Submission - CVS Capital

New client inquiry received from CVS Capital website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Investment Goals: {{investment_goals}}
Portfolio Size: {{portfolio_size}}
How they heard about us: {{hear_about}}

Message:
{{message}}

Submitted: {{date_time}}

---
This email was automatically generated from the CVS Capital website contact form.
```

#### Auto-Response Template:
```
Template Name: CVS Capital Auto Response
Template ID: template_auto_response

Subject: Thank you for contacting CVS Capital

Dear {{to_name}},

Thank you for your interest in CVS Capital's investment advisory services. We have received your inquiry and appreciate you taking the time to reach out.

One of our team members will review your message and contact you within one business day to discuss how we can assist with your financial goals.

Office Information:
10775 Double R Blvd
Reno, NV 89521

Business Hours: Monday - Friday, 8:00 AM - 5:00 PM (Pacific Time)

Direct Contact:
Creg V Shaffer: (775) 315-7594 | cregs@instituteforwealth.com
Curtis L Shaffer: (775) 309-7092 | curtis.shaffer@instituteforwealth.com

Best regards,
The CVS Capital Team

---
CVS Capital operates under Institute for Wealth Management RIA. 
This communication is for informational purposes only and does not constitute investment advice.
```

### 4. Get Your Configuration Values
From your EmailJS dashboard, collect:
- Service ID
- Template ID (internal notification)
- Template ID (auto-response)
- User ID (from Account tab)

### 5. Create Environment File
Create `.env.local` in your project root:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_AUTO_RESPONSE_TEMPLATE_ID=your_auto_response_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```

### 6. Test the Contact Form
1. Run `npm run dev`
2. Navigate to `http://localhost:3000/contact`
3. Fill out and submit the contact form
4. Verify both emails are received (internal notification + auto-response)

## Contact Form Complete! ✅

The contact page is now fully functional with:
- ✅ Lead qualification (investment goals + portfolio size)
- ✅ Professional form validation with user-friendly errors
- ✅ Dual EmailJS integration (notification to curtis.shaffer@instituteforwealth.com + auto-response)
- ✅ Office information (Reno address, business hours)
- ✅ Direct team contact cards with clickable phone/email
- ✅ FINRA-compliant disclaimers and privacy information
- ✅ Hydration-safe form components using React's useId()
- ✅ Professional success/error states and loading indicators

**Ready for Production!** Once EmailJS is configured, the contact form will be fully operational for lead generation and client inquiries.
