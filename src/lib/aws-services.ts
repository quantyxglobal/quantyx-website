// AWS Services for Quantyx Global Website
// Integrated with dashboard AWS configuration

import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { v4 as uuidv4 } from 'uuid';

// AWS Configuration from environment variables
const AWS_CONFIG = {
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
};

const SES_CONFIG = {
  region: import.meta.env.VITE_SES_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
};

// Initialize AWS clients
const s3Client = new S3Client(AWS_CONFIG);
const sesClient = new SESClient(SES_CONFIG);

// Constants
const BUCKET_NAME = import.meta.env.VITE_AWS_S3_BUCKET_NAME;
const SUPPORT_EMAIL = import.meta.env.VITE_SUPPORT_EMAIL;
// Removed file restrictions - allow any file type and size

// Types
export interface FileUploadResult {
  success: boolean;
  s3Key?: string;
  downloadUrl?: string;
  error?: string;
}

export interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

export interface ContactFormData {
  caseName: string;
  contactPersonName: string;
  email: string;
  phone: string;
  company: string;
  services: string[];
  message: string;
  files: File[];
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

// File Upload Service
export class FileUploadService {
  /**
   * Validates file before upload (now accepts all file types and sizes)
   */
  static validateFile(file: File): { valid: boolean; error?: string } {
    // Basic validation - just check if file exists and has a name
    if (!file || !file.name) {
      return {
        valid: false,
        error: 'Invalid file selected.'
      };
    }

    return { valid: true };
  }

  /**
   * Uploads a file to S3 via dashboard API (server-side upload)
   */
  static async uploadFile(file: File, folder: string = 'website-uploads'): Promise<FileUploadResult> {
    try {
      console.log('Starting server-side file upload for:', file.name, 'Size:', file.size, 'Type:', file.type);
      
      // Validate file
      const validation = this.validateFile(file);
      if (!validation.valid) {
        console.error('File validation failed:', validation.error);
        return {
          success: false,
          error: validation.error
        };
      }

      // Create form data for server upload
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', folder);

      console.log('Uploading via dashboard API...');

      // Upload via dashboard API
      const response = await fetch(`${import.meta.env.VITE_DASHBOARD_URL}/api/website/upload`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Upload failed');
      }

      const result = await response.json();
      console.log('Server-side upload successful:', result);

      return {
        success: true,
        s3Key: result.s3Key,
        downloadUrl: result.downloadUrl
      };

    } catch (error) {
      console.error('File upload error:', error);
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      return {
        success: false,
        error: `Failed to upload file "${file.name}". Error: ${error.message}`
      };
    }
  }

  /**
   * Generates a presigned download URL
   */
  static async generateDownloadUrl(s3Key: string, expiresIn: number = 3600): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: s3Key
    });

    return await getSignedUrl(s3Client, command, { expiresIn });
  }
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
            This message was sent from the Quantyx Global website contact form.<br>
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `;

      const supportCommand = new SendEmailCommand({
        Source: SUPPORT_EMAIL,
        Destination: {
          ToAddresses: [SUPPORT_EMAIL]
        },
        Message: {
          Subject: {
            Data: `New Contact Form Submission from ${firstName} ${lastName}`,
            Charset: 'UTF-8'
          },
          Body: {
            Html: {
              Data: supportEmailHtml,
              Charset: 'UTF-8'
            },
            Text: {
              Data: `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Company: ${company || 'Not provided'}
Services: ${services.join(', ')}

${message ? `Message:\n${message}\n\n` : ''}

${uploadedFiles.length > 0 ? `Uploaded Files (${uploadedFiles.length}):\n${uploadedFiles.map(file => `- ${file.originalName} (${(file.size / 1024 / 1024).toFixed(2)} MB)`).join('\n')}\n\n` : ''}

Submitted at: ${new Date().toLocaleString()}
              `.trim(),
              Charset: 'UTF-8'
            }
          }
        }
      });

      const supportResult = await sesClient.send(supportCommand);

      // Confirmation email to user
      const userEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #262083;">Thank you for contacting Quantyx Global!</h2>
          <p>Dear ${firstName},</p>
          <p>We have received your message and will get back to you within 24 hours.</p>
          <p>Our team of medico-legal experts will review your inquiry and provide you with the information you need.</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Submission Details:</h3>
            <p><strong>Services of Interest:</strong> ${services.length > 0 ? services.join(', ') : 'General inquiry'}</p>
            ${uploadedFiles.length > 0 ? `<p><strong>Documents Uploaded:</strong> ${uploadedFiles.length} files</p>` : ''}
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <p>If you have any urgent questions, please don't hesitate to call us at +91 70751 84488.</p>
          
          <p>Best regards,<br>
          The Quantyx Global Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            This is an automated confirmation email from Quantyx Global.<br>
            Please do not reply directly to this email.
          </p>
        </div>
      `;

      const userCommand = new SendEmailCommand({
        Source: SUPPORT_EMAIL,
        Destination: {
          ToAddresses: [email]
        },
        Message: {
          Subject: {
            Data: 'Thank you for contacting Quantyx Global',
            Charset: 'UTF-8'
          },
          Body: {
            Html: {
              Data: userEmailHtml,
              Charset: 'UTF-8'
            },
            Text: {
              Data: `
Thank you for contacting Quantyx Global!

Dear ${firstName},

We have received your message and will get back to you within 24 hours.

Your submission details:
- Services of Interest: ${services.length > 0 ? services.join(', ') : 'General inquiry'}
${uploadedFiles.length > 0 ? `- Documents Uploaded: ${uploadedFiles.length} files\n` : ''}- Submitted: ${new Date().toLocaleString()}

If you have any urgent questions, please call us at +91 70751 84488.

Best regards,
The Quantyx Global Team
              `.trim(),
              Charset: 'UTF-8'
            }
          }
        }
      });

      await sesClient.send(userCommand);

      return {
        success: true,
        messageId: supportResult.MessageId
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
  static async sendQuoteEmail(formData: QuoteFormData, uploadedFiles: { s3Key: string; downloadUrl: string; originalName: string; size: number }[]): Promise<EmailResult> {
    try {
      const { fullName, email, phone, firmName, caseDetails, services } = formData;

      // Email to support team with download links
      const fileListHtml = uploadedFiles.map(file => `
        <li style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 4px;">
          <strong>${file.originalName}</strong> (${(file.size / 1024 / 1024).toFixed(2)} MB)
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
            This quote request was submitted through the Quantyx Global website.<br>
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `;

      const supportCommand = new SendEmailCommand({
        Source: SUPPORT_EMAIL,
        Destination: {
          ToAddresses: [SUPPORT_EMAIL]
        },
        Message: {
          Subject: {
            Data: `New Quote Request from ${fullName}`,
            Charset: 'UTF-8'
          },
          Body: {
            Html: {
              Data: supportEmailHtml,
              Charset: 'UTF-8'
            },
            Text: {
              Data: `
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
              `.trim(),
              Charset: 'UTF-8'
            }
          }
        }
      });

      const supportResult = await sesClient.send(supportCommand);

      // Confirmation email to user
      const userEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #262083;">Quote Request Received Successfully!</h2>
          <p>Dear ${fullName},</p>
          <p>Thank you for your quote request. We have received your documents and will review them carefully.</p>
          
          <h3 style="color: #262083;">What happens next?</h3>
          <ul style="line-height: 1.6;">
            <li>Our medico-legal experts will review your documents within 24-48 hours</li>
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
          The Quantyx Global Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            This is an automated confirmation email from Quantyx Global.<br>
            Please do not reply directly to this email.
          </p>
        </div>
      `;

      const userCommand = new SendEmailCommand({
        Source: SUPPORT_EMAIL,
        Destination: {
          ToAddresses: [email]
        },
        Message: {
          Subject: {
            Data: 'Quote Request Received - Quantyx Global',
            Charset: 'UTF-8'
          },
          Body: {
            Html: {
              Data: userEmailHtml,
              Charset: 'UTF-8'
            },
            Text: {
              Data: `
Quote Request Received Successfully!

Dear ${fullName},

Thank you for your quote request. We have received your documents and will review them carefully.

What happens next:
- Our medico-legal experts will review your documents within 24-48 hours
- We will prepare a detailed quotation based on your specific requirements
- You will receive the quote via email along with project timeline information

Your submission summary:
- Services Requested: ${services.join(', ')}
- Documents Uploaded: ${uploadedFiles.length} files
- Submitted: ${new Date().toLocaleString()}

If you have any questions, please contact us at ${SUPPORT_EMAIL} or call +91 70751 84488.

Best regards,
The Quantyx Global Team
              `.trim(),
              Charset: 'UTF-8'
            }
          }
        }
      });

      await sesClient.send(userCommand);

      return {
        success: true,
        messageId: supportResult.MessageId
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
