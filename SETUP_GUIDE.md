# quantyx Global Website - Integrated Setup Guide

This guide will help you set up the quantyx Global website with integrated contact forms, quote requests, and S3 file upload functionality using the same AWS configuration as the dashboard.

## 🏗️ Architecture Overview

- **Frontend:** React + TypeScript + Vite (Port 5173)
- **AWS Integration:** Direct AWS SDK integration (S3 + SES)
- **Email:** AWS SES
- **File Storage:** AWS S3 (same bucket as dashboard: `quantyx-global`)
- **Recipient Email:** support@quantxg.com

## 📋 Prerequisites

1. **Node.js** (v16 or higher)
2. **npm** or **yarn**
3. **AWS Account** with S3 and SES access (same as dashboard)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Navigate to the website directory
cd medilegal-sample-site-main

# Install dependencies (includes AWS SDK)
npm install

# Start the development server
npm run dev
```

The website will be available at `http://localhost:5173`

## ⚙️ Configuration

### Environment Variables (.env)

The website uses the same AWS configuration as the dashboard. Edit `medilegal-sample-site-main/.env`:

```env
# Dashboard URL for login integration
VITE_DASHBOARD_URL=http://localhost:3000/login

# AWS Configuration (same as dashboard)
VITE_AWS_ACCESS_KEY_ID=your-aws-access-key-id
VITE_AWS_SECRET_ACCESS_KEY=your-aws-secret-access-key
VITE_AWS_REGION=ap-south-2
VITE_AWS_S3_BUCKET_NAME=quantyx-global

# Postmark Email Configuration
VITE_POSTMARK_SERVER_TOKEN=your-postmark-server-token
VITE_SUPPORT_EMAIL=support@quantxg.com
```

**Note:** The website uses the same S3 bucket (`quantyx-global`) as the dashboard. Files are organized in separate folders:
- Dashboard files: `cases/`, `raw/`, `output/`
- Website files: `website-uploads/`, `quote-requests/`

## 🔧 Features Implemented

### Contact Form (`/contact`)
- ✅ Direct AWS SES integration
- ✅ Sends email to `support@quantxg.com`
- ✅ User confirmation email
- ✅ Service selection checkboxes
- ✅ Form validation
- ✅ Success/error handling

### Quote Request Form (`/quote`)
- ✅ Direct S3 file upload (PDF, DOC, DOCX)
- ✅ Email with presigned download links to `support@quantxg.com`
- ✅ User confirmation email
- ✅ Service selection
- ✅ File validation (type, size)
- ✅ Presigned URLs (7-day expiry)

## 📁 File Organization in S3

The website uploads files to the same S3 bucket as the dashboard but in separate folders:

```
quantyx-global/
├── cases/                    # Dashboard case files
├── raw/                      # Dashboard raw files
├── output/                   # Dashboard output files
├── website-uploads/          # General website uploads
└── quote-requests/           # Quote request files
    └── YYYY-MM-DD/          # Organized by date
        └── [uuid]-filename.ext
```

## 🧪 Testing

### Test Contact Form
1. Go to `http://localhost:5173/contact`
2. Fill out the form
3. Check that emails are received at `support@quantxg.com`
4. Verify user receives confirmation email

### Test Quote Form
1. Go to `http://localhost:5173/quote`
2. Fill out the form and upload files
3. Check that support email includes download links
4. Verify files are uploaded to S3 in `quote-requests/` folder
5. Test download links work (7-day expiry)

## 🚨 Troubleshooting

### AWS Issues
- **Problem:** AWS credentials not working
- **Solution:** 
  - Verify credentials match the dashboard's `.env` file
  - Ensure AWS user has S3 and SES permissions
  - Check AWS region settings

### Email Issues
- **Problem:** Emails not sending
- **Solution:**
  - Verify SES is configured and verified in `us-east-1`
  - Check that `support@quantxg.com` is a verified sender
  - Ensure SES is out of sandbox mode for production

### File Upload Issues
- **Problem:** Files not uploading
- **Solution:**
  - Check S3 bucket permissions
  - Verify file size limits (50MB max)
  - Check file type restrictions (PDF, DOC, DOCX only)

## 🔒 Security Features

- File type validation (PDF, DOC, DOCX only)
- File size limits (50MB per file)
- Server-side encryption for S3 uploads
- Input validation and sanitization
- Presigned URLs with 7-day expiration
- Same security model as dashboard

## 📊 AWS Resource Usage

### S3 Storage
- **Bucket:** `quantyx-global` (shared with dashboard)
- **Folders:** `website-uploads/`, `quote-requests/`
- **Encryption:** AES256 server-side encryption
- **Access:** Presigned URLs for downloads

### SES Email
- **Region:** `us-east-1`
- **Sender:** `support@quantxg.com`
- **Templates:** HTML + Text versions
- **Delivery:** Automatic retry on failure

## 🚀 Production Deployment

### Frontend Build
```bash
npm run build
# Deploy dist/ folder to your hosting service
```

### Environment Updates for Production
```env
# Update URLs for production
VITE_DASHBOARD_URL=https://dashboard.quantxg.com/login

# AWS credentials remain the same
# Email settings remain the same
```

### Security Considerations
1. **Environment Variables:** Never expose AWS credentials in client-side code
2. **CORS:** Configure S3 bucket CORS for production domain
3. **SES:** Ensure SES is out of sandbox mode
4. **Rate Limiting:** Consider implementing rate limiting for form submissions

## ✅ Verification Checklist

- [ ] Website runs on `http://localhost:5173`
- [ ] Contact form sends emails to `support@quantxg.com`
- [ ] Quote form uploads files to S3 `quote-requests/` folder
- [ ] Users receive confirmation emails
- [ ] Download links work and expire after 7 days
- [ ] File validation works (type and size limits)
- [ ] Error handling displays appropriate messages
- [ ] Files are organized properly in S3 bucket
- [ ] No conflicts with dashboard file storage

## 🔄 Integration Benefits

1. **Shared Infrastructure:** Uses same AWS account and resources as dashboard
2. **Cost Efficiency:** No additional S3 bucket or SES setup needed
3. **Unified Management:** All files and emails managed through same AWS account
4. **Consistent Security:** Same security policies and encryption as dashboard
5. **Simplified Deployment:** No separate backend server to maintain

## 📞 Support

The website is now fully integrated with the dashboard's AWS infrastructure. All contact inquiries and quote requests will be sent to `support@quantxg.com` with files securely stored in the shared S3 bucket.