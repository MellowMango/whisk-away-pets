# EmailJS Setup Instructions

This document explains how to set up EmailJS for the WhiskAway Pets intake form to send confirmation emails to customers and notifications to the owner.

## 1. EmailJS Account Setup

1. Go to [EmailJS.com](https://www.emailjs.com/) and create an account
2. Create a new email service (Gmail, Outlook, etc.)
3. Create two email templates (see templates below)
4. Get your Service ID, Template IDs, and Public Key

## 2. Environment Variables

Update your `.env.local` file with the following EmailJS configuration:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_CUSTOMER=your_customer_template_id_here  
NEXT_PUBLIC_EMAILJS_TEMPLATE_OWNER=your_owner_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
EMAILJS_OWNER_EMAIL=whiskawaypets@gmail.com
```

## 3. Email Templates

### Customer Confirmation Template

**Template Name:** `customer_confirmation`

**Subject:** `Your WhiskAway Pets Intake Form - Confirmation`

**Body:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: #f97316; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .pet-info { background: #f9f9f9; padding: 15px; margin: 10px 0; border-left: 4px solid #f97316; }
        .footer { background: #f5f5f5; padding: 20px; text-align: center; font-size: 14px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🐾 Thank You, {{customer_first_name}}!</h1>
    </div>
    
    <div class="content">
        <p>Dear {{customer_name}},</p>
        
        <p>Thank you for submitting your pet relocation intake form! We've received your information and will review your request shortly.</p>
        
        <h3>📋 Your Submission Summary:</h3>
        <ul>
            <li><strong>Route:</strong> {{origin_country}} → {{destination_country}}</li>
            <li><strong>Transport Method:</strong> {{transport_method}}</li>
            <li><strong>Travel Date:</strong> {{travel_date}}</li>
            <li><strong>Number of Pets:</strong> {{pet_count}}</li>
            <li><strong>Pets:</strong> {{pets_summary}}</li>
            <li><strong>Urgent Request:</strong> {{is_urgent}}</li>
        </ul>
        
        <h3>🚀 What Happens Next?</h3>
        <ol>
            <li>Our team will review your specific requirements</li>
            <li>We'll prepare your personalized International Pawsport</li>
            <li>You'll receive detailed next steps within 24-48 hours</li>
        </ol>
        
        <p>If you have any immediate questions or concerns, please don't hesitate to contact us.</p>
        
        <p>Best regards,<br>
        The WhiskAway Pets Team</p>
    </div>
    
    <div class="footer">
        <p>WhiskAway Pets - Making international pet moves stress-free<br>
        Email: whiskawaypets@gmail.com | Website: whiskawaypets.com</p>
    </div>
</body>
</html>
```

### Owner Notification Template

**Template Name:** `owner_notification`

**Subject:** `New Intake Form Submission - {{customer_name}}`

**Body:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: #dc2626; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .urgent { background: #fef2f2; border: 2px solid #dc2626; padding: 15px; margin: 10px 0; }
        .customer-info { background: #f0f9ff; padding: 15px; margin: 10px 0; }
        .pet-details { background: #f9f9f9; padding: 15px; margin: 10px 0; white-space: pre-line; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🔔 New Intake Form Submission</h1>
    </div>
    
    <div class="content">
        <p><strong>Submission Date:</strong> {{submission_date}}</p>
        
        {{#is_urgent}}
        <div class="urgent">
            <h3>⚠️ URGENT REQUEST</h3>
            <p>This customer has marked their request as urgent. Please prioritize this submission.</p>
        </div>
        {{/is_urgent}}
        
        <div class="customer-info">
            <h3>👤 Customer Information</h3>
            <ul>
                <li><strong>Name:</strong> {{customer_name}}</li>
                <li><strong>Email:</strong> {{customer_email}}</li>
                <li><strong>Phone:</strong> {{customer_phone}}</li>
            </ul>
        </div>
        
        <h3>🗺️ Travel Details</h3>
        <ul>
            <li><strong>Route:</strong> {{origin_country}} → {{destination_country}}</li>
            <li><strong>Transport Method:</strong> {{transport_method}}</li>
            <li><strong>Travel Date:</strong> {{travel_date}}</li>
            <li><strong>Urgent:</strong> {{is_urgent}}</li>
        </ul>
        
        <h3>🐾 Pet Information ({{pet_count}} pets)</h3>
        <div class="pet-details">{{pets_details}}</div>
        
        <h3>📝 Additional Information</h3>
        <p>{{additional_info}}</p>
        
        <hr>
        <p><em>This email was automatically generated from the intake form submission.</em></p>
    </div>
</body>
</html>
```

## 4. Template Variables

The following variables are available in your EmailJS templates:

### Customer Confirmation Template:
- `{{to_email}}` - Customer's email
- `{{customer_name}}` - Full name
- `{{customer_first_name}}` - First name only
- `{{origin_country}}` - Origin country name
- `{{destination_country}}` - Destination country name
- `{{transport_method}}` - Transport method
- `{{travel_date}}` - Travel date
- `{{pet_count}}` - Number of pets
- `{{pets_summary}}` - Brief pet summary
- `{{phone}}` - Customer phone
- `{{is_urgent}}` - Yes/No urgent status

### Owner Notification Template:
- `{{to_email}}` - Owner's email
- `{{customer_name}}` - Customer's full name
- `{{customer_email}}` - Customer's email
- `{{customer_phone}}` - Customer's phone
- `{{origin_country}}` - Origin country
- `{{destination_country}}` - Destination country
- `{{transport_method}}` - Transport method
- `{{travel_date}}` - Travel date
- `{{is_urgent}}` - Urgent status
- `{{pet_count}}` - Number of pets
- `{{pets_details}}` - Detailed pet information
- `{{additional_info}}` - Additional notes
- `{{submission_date}}` - Form submission timestamp

## 5. Testing

1. Update your environment variables with the actual EmailJS credentials
2. Fill out the intake form on your local development server
3. Check both the customer email and owner email for successful delivery
4. Monitor the browser console for any EmailJS errors

## 6. Production Deployment

When deploying to production (Vercel, Netlify, etc.), make sure to:
1. Add all EmailJS environment variables to your hosting platform
2. Update the `EMAILJS_OWNER_EMAIL` to the correct production email
3. Test the form submission in production

## 7. Error Handling

The implementation includes error handling:
- Emails are sent asynchronously after form submission
- Form submission success doesn't depend on email success
- Email failures are logged to the console
- Users see success message regardless of email status

This ensures the core functionality works even if email service has issues.