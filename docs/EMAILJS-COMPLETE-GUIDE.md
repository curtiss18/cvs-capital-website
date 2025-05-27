# EmailJS Configuration Guide for CVS Capital

This guide contains all the information needed to set up and maintain the email functionality for the CVS Capital contact form.

## Overview

The contact form sends two emails:
1. **Notification Email** - Sent to the CVS Capital team when someone submits the form
2. **Auto-Response Email** - Sent to the person who submitted the form as confirmation

## EmailJS Account Setup

### 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account (200 emails/month)

### 2. Add Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Save the **Service ID** (format: `service_xxxxxxx`)

### 3. Get Your Public Key
1. Go to "Integration" → "API Keys"
2. Copy your **Public Key** (format: `user_xxxxxxxxxx`)

## Email Template Configuration

### Template 1: Internal Notification Email

**Template Settings in EmailJS Dashboard:**
- **Template Name:** CVS Capital - New Contact Form Submission
- **Template ID:** Save this ID for .env.local
- **To Email:** `curtiss18@gmail.com` (development) or `curtis.shaffer@instituteforwealth.com` (production)
- **From Name:** `{{from_name}}`
- **Reply To:** `{{from_email}}`
- **Subject:** New Contact Form Submission from {{from_name}}

**Template Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #2c5530; color: white; padding: 20px; text-align: center; }
    .section { margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-radius: 5px; }
    .label { font-weight: bold; color: #2c5530; }
    .value { margin-left: 10px; }
    .message-box { background-color: white; padding: 15px; border: 1px solid #ddd; border-radius: 5px; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Form Submission</h2>
    </div>
    
    <div class="section">
      <h3>Contact Information</h3>
      <p><span class="label">Name:</span><span class="value">{{from_name}}</span></p>
      <p><span class="label">Email:</span><span class="value">{{from_email}}</span></p>
      <p><span class="label">Phone:</span><span class="value">{{phone}}</span></p>
    </div>
    
    <div class="section">
      <h3>Investment Details</h3>
      <p><span class="label">Investment Goals:</span><span class="value">{{investment_goals}}</span></p>
      <p><span class="label">Portfolio Size:</span><span class="value">{{portfolio_size}}</span></p>
    </div>
    
    <div class="section">
      <h3>Lead Source</h3>
      <p><span class="label">How They Heard About Us:</span><span class="value">{{hear_about}}</span></p>
    </div>
    
    <div class="section">
      <h3>Message</h3>
      <div class="message-box">{{message}}</div>
    </div>
    
    <p style="text-align: center; color: #666; font-size: 12px; margin-top: 30px;">
      Submitted on: {{date_time}}<br>
      This email was sent from the CVS Capital website contact form.
    </p>
  </div>
</body>
</html>
```

### Template 2: Auto-Response Email

**Template Settings in EmailJS Dashboard:**
- **Template Name:** CVS Capital - Thank You for Contacting Us
- **Template ID:** Save this ID for .env.local
- **To Email:** `{{from_email}}`
- **From Name:** `CVS Capital`
- **Reply To:** `curtis.shaffer@instituteforwealth.com`
- **Subject:** Thank You for Contacting CVS Capital

**Template Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #2c5530; color: white; padding: 30px; text-align: center; }
    .content { padding: 30px 20px; }
    .section { margin: 25px 0; }
    .details-box { background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0; }
    .label { font-weight: bold; color: #2c5530; }
    .footer { background-color: #f5f5f5; padding: 20px; text-align: center; margin-top: 30px; }
    .disclaimer { font-size: 12px; color: #666; margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-left: 3px solid #2c5530; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Contacting CVS Capital</h1>
    </div>
    
    <div class="content">
      <p>Dear {{from_name}},</p>
      
      <p>Thank you for contacting CVS Capital. We have received your inquiry and appreciate your interest in our investment advisory services.</p>
      
      <div class="section">
        <h3>Your Submission Details:</h3>
        <div class="details-box">
          <p><span class="label">Investment Goals:</span> {{investment_goals}}</p>
          <p><span class="label">Portfolio Size:</span> {{portfolio_size}}</p>
          <p><span class="label">Your Message:</span></p>
          <p style="margin-left: 20px; font-style: italic;">{{message}}</p>
        </div>
      </div>
      
      <div class="section">
        <h3>What Happens Next:</h3>
        <p>One of our advisors will review your information and contact you within one business day. We look forward to discussing how we can help you achieve your financial goals.</p>
        <p>If you have any immediate questions, please don't hesitate to call us at <strong>(775) 309-7092</strong>.</p>
      </div>
      
      <p>Best regards,<br>
      The CVS Capital Team</p>
    </div>
    
    <div class="footer">
      <h4>Office Information</h4>
      <p>
        CVS Capital<br>
        Institute for Wealth Management<br>
        10775 Double R Blvd<br>
        Reno, NV 89521<br><br>
        <strong>Office Hours:</strong> Monday-Friday, 8:00 AM - 5:00 PM (Pacific Time)
      </p>
    </div>
    
    <div class="disclaimer">
      <strong>IMPORTANT DISCLOSURES:</strong><br>
      CVS Capital operates as a Rep as Portfolio Manager under the Institute for Wealth Management, a registered investment adviser. This email is for informational purposes only and does not constitute investment advice or an offer to buy or sell securities.<br><br>
      This is an automated response. Please do not reply to this email.
    </div>
  </div>
</body>
</html>
```

## Environment Variables Configuration

Add these to your `.env.local` file:

```env
# Contact Form (EmailJS)
NEXT_PUBLIC_EMAILJS_SERVICE_ID="service_xxxxxxx"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="template_xxxxxxx"
NEXT_PUBLIC_EMAILJS_AUTO_RESPONSE_TEMPLATE_ID="template_yyyyyyy"
NEXT_PUBLIC_EMAILJS_USER_ID="user_zzzzzzzzzzzzz"
```

**Current Development Configuration:**
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID="service_0vha8q6"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="template_d2i9d98"
NEXT_PUBLIC_EMAILJS_AUTO_RESPONSE_TEMPLATE_ID="template_td11aca"
NEXT_PUBLIC_EMAILJS_USER_ID="user_CEaUbFoVuyRLlj-k0"
```

## Template Variables Reference

The form sends these variables to EmailJS:

| Variable | Description | Example |
|----------|-------------|---------|
| {{from_name}} | Submitter's name | "John Smith" |
| {{from_email}} | Submitter's email | "john@example.com" |
| {{phone}} | Submitter's phone | "(555) 123-4567" |
| {{investment_goals}} | Selected goals (comma-separated) | "Estate Planning, Retirement Planning, Tax Optimization" |
| {{portfolio_size}} | Portfolio size range | "$100,000 - $500,000" |
| {{hear_about}} | How they heard about CVS | "Referral from Friend/Family" |
| {{message}} | Their message | "I'm interested in discussing..." |
| {{date_time}} | Submission timestamp | "October 15, 2024 at 03:45 PM" |

## Testing the Email System

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Test the form:**
   - Navigate to http://localhost:3000/contact
   - Fill out all fields
   - Select up to 3 investment goals
   - Submit the form

3. **Verify emails:**
   - Check curtiss18@gmail.com for the notification email
   - Check the email address you used in the form for the auto-response

4. **Check for errors:**
   - Open browser console (F12) to see any error messages
   - Common issues: template variables don't match, email service not authenticated

## Switching to Production

When ready to go live:

1. **Update EmailJS notification template:**
   - Change "To Email" from `curtiss18@gmail.com` to `curtis.shaffer@instituteforwealth.com`

2. **No code changes needed** - The email recipient is configured in EmailJS, not in the code

## Troubleshooting

### "The recipient's address is empty" error
- Make sure the "To Email" field in EmailJS template is filled with an actual email address (notification) or {{from_email}} (auto-response)
- Do NOT use {{to_email}} as this variable is not sent from the form

### Emails not sending
- Verify all environment variables are set correctly
- Check EmailJS dashboard for service status
- Ensure you haven't exceeded the free tier limit (200 emails/month)

### Fields showing as "undefined"
- Verify template variable names match exactly (case-sensitive)
- Check that all form fields are being properly formatted before sending

## Email Features Summary

- ✅ Dual email system (notification + auto-response)
- ✅ Multi-select investment goals (up to 3)
- ✅ Human-readable field labels in emails
- ✅ FINRA-compliant disclaimers
- ✅ Professional HTML email design
- ✅ Mobile-responsive email templates
- ✅ Pacific Time timestamp
- ✅ Lead qualification data capture

## Maintenance Notes

- EmailJS free tier: 200 emails/month (100 form submissions = 200 emails)
- For higher volume, upgrade to paid plan
- Regularly check EmailJS dashboard for failed emails
- Keep email templates FINRA-compliant
- Test form after any updates to ensure emails still work

---

**Last Updated:** May 2025
**Contact:** curtis.shaffer@instituteforwealth.com
