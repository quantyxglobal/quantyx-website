// Postmark Email Services for Quantix Global Website
// Integrated with dashboard configuration

import * as postmark from 'postmark';

// Postmark Configuration from environment variables
const POSTMARK_SERVER_TOKEN = import.meta.env.VITE_POSTMARK_SERVER_TOKEN;
const SUPPORT_EMAIL = import.meta.env.VITE_SUPPORT_EMAIL;

// Initialize Postmark client
const postmarkClient = new postmark.ServerClient(POSTMARK_SERVER_TOKEN);

// Types
export interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  services: string[];
  message: string;
  files?: File[];
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  firmName: string;
  caseDetails: string;
  services: string[];
  files: File[];
}

// Email Service
export class EmailService {
  /**
   * Sends contact form email with optional file attachments
   */
  static async sendContactEmail(formData: ContactFormData, uploadedFiles: { s3Key: string; downloadUrl: string; originalName: string; size: number; mimeType: string }[] = []): Promise<EmailResult> {
    try {
      const { firstName, lastName, email, phone, company, services, message } = formData;

      // File list HTML if files are uploaded
      const fileListHtml = uploadedFiles.length > 0 ? `
        <h3>Uploaded Documents (${uploadedFiles.length} files):</h3>
        <ul style="list-style: none; padding: 0;">
          ${uploadedFiles.map(file => `
            <li style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 4px;">
              <strong>${file.originalName}</strong> (${(file.size / 1024 / 1024).toFixed(2)} MB)
              <br>
              <small style="color: #666; font-style: italic;">Type: ${file.mimeType}</small>
              <br>
              <a href="${file.downloadUrl}" style="color: #262083; text-decoration: none;">📥 Download File</a>
              <br>
              <small style="color: #666;">Download link expires in 7 days</small>
            </li>
          `).join('')}
        </ul>
      ` : '';

      // Email to support team
      const supportEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #262083;">New Contact Form Submission</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Services Interested:</strong> ${services.length > 0 ? services.join(', ') : 'None specified'}</p>
          </div>
          ${message ? `
            <h3>Message:</h3>
            <div style="background: #ffffff; padding: 15px; border-left: 4px solid #262083; margin: 10px 0;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          ` : ''}
          ${fileListHtml}
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            This message was sent from the Quantix Global website contact form.<br>
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `;

      const supportTextBody = `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Company: ${company || 'Not provided'}
Services: ${services.join(', ')}

${message ? `Message:\n${message}\n\n` : ''}

${uploadedFiles.length > 0 ? `Uploaded Files (${uploadedFiles.length}):\n${uploadedFiles.map(file => `- ${file.originalName} (${(file.size / 1024 / 1024).toFixed(2)} MB)`).join('\n')}\n\n` : ''}

Submitted at: ${new Date().toLocaleString()}
      `.trim();

      const supportResult = await postmarkClient.sendEmail({
        From: SUPPORT_EMAIL,
        To: SUPPORT_EMAIL,
        Subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        HtmlBody: supportEmailHtml,
        TextBody: supportTextBody,
        MessageStream: 'outbound'
      });

      // Confirmation email to user
      const userEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #262083;">Thank you for contacting Quantix Global!</h2>
          <p>Dear ${firstName},</p>
          <p>We have received your message and will get back to you within 24 hours.</p>
          <p>Our team of medical-legal experts will review your inquiry and provide you with the information you need.</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Submission Details:</h3>
            <p><strong>Services of Interest:</strong> ${services.length > 0 ? services.join(', ') : 'General inquiry'}</p>
            ${uploadedFiles.length > 0 ? `<p><strong>Documents Uploaded:</strong> ${uploadedFiles.length} files</p>` : ''}
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <p>If you have any urgent questions, please don't hesitate to call us at +91 70751 84488.</p>
          
          <p>Best regards,<br>
          The Quantix Global Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            This is an automated confirmation email from Quantix Global.<br>
            Please do not reply directly to this email.
          </p>
        </div>
      `;

      const userTextBody = `
Thank you for contacting Quantix Global!

Dear ${firstName},

We have received your message and will get back to you within 24 hours.

Your submission details:
- Services of Interest: ${services.length > 0 ? services.join(', ') : 'General inquiry'}
${uploadedFiles.length > 0 ? `- Documents Uploaded: ${uploadedFiles.length} files\n` : ''}- Submitted: ${new Date().toLocaleString()}

If you have any urgent questions, please call us at +91 70751 84488.

Best regards,
The Quantix Global Team
      `.trim();

      await postmarkClient.sendEmail({
        From: SUPPORT_EMAIL,
        To: email,
        Subject: 'Thank you for contacting Quantix Global',
        HtmlBody: userEmailHtml,
        TextBody: userTextBody,
        MessageStream: 'outbound'
      });

      return {
        success: true,
        messageId: supportResult.MessageID
      };

    } catch (error) {
      console.error('Email send error:', error);
      return {
        success: false,
        error: 'Failed to send email. Please try again later.'
      };
    }
  }

  /**
   * Sends quote request email with file attachments
   */
  static async sendQuoteEmail(formData: QuoteFormData, uploadedFiles: { s3Key: string; downloadUrl: string; originalName: string; size: number; mimeType: string }[]): Promise<EmailResult> {
    try {
      const { fullName, email, phone, firmName, caseDetails, services } = formData;

      // Email to support team with download links
      const fileListHtml = uploadedFiles.map(file => `
        <li style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 4px;">
          <strong>${file.originalName}</strong> (${(file.size / 1024 / 1024).toFixed(2)} MB)
          <br>
          <small style="color: #666; font-style: italic;">Type: ${file.mimeType}</small>
          <br>
          <a href="${file.downloadUrl}" style="color: #262083; text-decoration: none;">📥 Download File</a>
          <br>
          <small style="color: #666;">Download link expires in 7 days</small>
        </li>
      `).join('');

      const supportEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #262083;">New Quote Request Submission</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Firm/Organization:</strong> ${firmName || 'Not provided'}</p>
            <p><strong>Services Requested:</strong> ${services.join(', ')}</p>
          </div>
          
          ${caseDetails ? `
            <h3>Case Details:</h3>
            <div style="background: #ffffff; padding: 15px; border-left: 4px solid #262083; margin: 10px 0;">
              ${caseDetails.replace(/\n/g, '<br>')}
            </div>
          ` : ''}
          
          <h3>Uploaded Documents (${uploadedFiles.length} files):</h3>
          <ul style="list-style: none; padding: 0;">
            ${fileListHtml}
          </ul>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            This quote request was submitted through the Quantix Global website.<br>
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `;

      const supportTextBody = `
New Quote Request Submission

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Firm: ${firmName || 'Not provided'}
Services: ${services.join(', ')}

${caseDetails ? `Case Details:\n${caseDetails}\n\n` : ''}

Uploaded Files (${uploadedFiles.length}):
${uploadedFiles.map(file => `- ${file.originalName} (${(file.size / 1024 / 1024).toFixed(2)} MB)`).join('\n')}

Download links have been provided in the HTML version of this email.

Submitted at: ${new Date().toLocaleString()}
      `.trim();

      const supportResult = await postmarkClient.sendEmail({
        From: SUPPORT_EMAIL,
        To: SUPPORT_EMAIL,
        Subject: `New Quote Request from ${fullName}`,
        HtmlBody: supportEmailHtml,
        TextBody: supportTextBody,
        MessageStream: 'outbound'
      });

      // Confirmation email to user
      const userEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #262083;">Quote Request Received Successfully!</h2>
          <p>Dear ${fullName},</p>
          <p>Thank you for your quote request. We have received your documents and will review them carefully.</p>
          
          <h3 style="color: #262083;">What happens next?</h3>
          <ul style="line-height: 1.6;">
            <li>Our medical-legal experts will review your documents within 24-48 hours</li>
            <li>We will prepare a detailed quotation based on your specific requirements</li>
            <li>You will receive the quote via email along with project timeline information</li>
          </ul>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Submission Summary:</h3>
            <p><strong>Services Requested:</strong> ${services.join(', ')}</p>
            <p><strong>Documents Uploaded:</strong> ${uploadedFiles.length} files</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <p>If you have any questions or need to provide additional information, please don't hesitate to contact us at ${SUPPORT_EMAIL} or call +91 70751 84488.</p>
          
          <p>Best regards,<br>
          The Quantix Global Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            This is an automated confirmation email from Quantix Global.<br>
            Please do not reply directly to this email.
          </p>
        </div>
      `;

      const userTextBody = `
Quote Request Received Successfully!

Dear ${fullName},

Thank you for your quote request. We have received your documents and will review them carefully.

What happens next:
- Our medical-legal experts will review your documents within 24-48 hours
- We will prepare a detailed quotation based on your specific requirements
- You will receive the quote via email along with project timeline information

Your submission summary:
- Services Requested: ${services.join(', ')}
- Documents Uploaded: ${uploadedFiles.length} files
- Submitted: ${new Date().toLocaleString()}

If you have any questions, please contact us at ${SUPPORT_EMAIL} or call +91 70751 84488.

Best regards,
The Quantix Global Team
      `.trim();

      await postmarkClient.sendEmail({
        From: SUPPORT_EMAIL,
        To: email,
        Subject: 'Quote Request Received - Quantix Global',
        HtmlBody: userEmailHtml,
        TextBody: userTextBody,
        MessageStream: 'outbound'
      });

      return {
        success: true,
        messageId: supportResult.MessageID
      };

    } catch (error) {
      console.error('Quote email send error:', error);
      return {
        success: false,
        error: 'Failed to send quote request. Please try again later.'
      };
    }
  }
}
