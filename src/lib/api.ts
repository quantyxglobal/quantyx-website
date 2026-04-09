// Integrated API services using dashboard endpoints and Postmark email services
import { FileUploadService } from './aws-services';
import { EmailService, type ContactFormData, type QuoteFormData } from './postmark-services';

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

// Get dashboard URL from environment
const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:3000';

// Contact form submission with optional file uploads
export const submitContactForm = async (formData: ContactFormData): Promise<ApiResponse> => {
  try {
    console.log('Starting contact form submission...');
    console.log('Form data:', {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      country: formData.country,
      services: formData.services,
      fileCount: formData.files?.length || 0
    });

    // Validate required fields - company and country are required, message is optional
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.company || !formData.country) {
      throw new Error('Please fill in all required fields');
    }

    // Upload files to S3 if any are provided
    const uploadResults = [];
    if (formData.files && formData.files.length > 0) {
      console.log('Starting file uploads to S3...');
      for (let i = 0; i < formData.files.length; i++) {
        const file = formData.files[i];
        console.log(`Uploading file ${i + 1}/${formData.files.length}: ${file.name}`);
        
        const result = await FileUploadService.uploadFile(file, 'contact');
        if (!result.success) {
          console.error(`Failed to upload file ${file.name}:`, result.error);
          throw new Error(result.error || `Failed to upload file: ${file.name}`);
        }
        
        console.log(`File ${i + 1} uploaded successfully:`, result.s3Key);
        uploadResults.push({
          s3Key: result.s3Key!,
          downloadUrl: result.downloadUrl!,
          originalName: file.name,
          size: file.size,
          mimeType: file.type
        });
      }
      console.log('All files uploaded successfully.');
    }

    console.log('Submitting to dashboard API...');

    // Submit to dashboard API to store in database
    const response = await fetch(`${DASHBOARD_URL}/api/website/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        country: formData.country,
        services: formData.services,
        message: formData.message,
        uploadedFiles: uploadResults
      }),
    });

    console.log('Dashboard API response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Dashboard API error:', errorData);
      throw new Error(errorData.error || 'Failed to submit contact form');
    }

    const result = await response.json();
    console.log('Dashboard API success:', result);

    // Email notifications are handled by the dashboard API
    // No need to send emails from the website

    return {
      success: true,
      message: 'Your message has been sent successfully. We will get back to you within 24 hours.',
      data: result
    };

  } catch (error) {
    console.error('Contact form submission error:', error);
    console.error('Error stack:', error.stack);
    throw new Error(error instanceof Error ? error.message : 'Failed to submit contact form. Please try again.');
  }
};

// Quote form submission with file upload
export const submitQuoteForm = async (formData: QuoteFormData): Promise<ApiResponse> => {
  try {
    console.log('Starting quote form submission...');
    console.log('Form data:', {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      firmName: formData.firmName,
      country: formData.country,
      services: formData.services,
      fileCount: formData.files.length
    });

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.country) {
      throw new Error('Please fill in all required fields');
    }

    if (formData.services.length === 0) {
      throw new Error('Please select at least one service');
    }

    if (formData.files.length === 0) {
      throw new Error('Please upload at least one document');
    }

    // Upload files to S3 first
    console.log('Starting file uploads to S3...');
    const uploadResults = [];
    for (let i = 0; i < formData.files.length; i++) {
      const file = formData.files[i];
      console.log(`Uploading file ${i + 1}/${formData.files.length}: ${file.name}`);
      
      const result = await FileUploadService.uploadFile(file, 'quote-requests');
      if (!result.success) {
        console.error(`Failed to upload file ${file.name}:`, result.error);
        throw new Error(result.error || `Failed to upload file: ${file.name}`);
      }
      
      console.log(`File ${i + 1} uploaded successfully:`, result.s3Key);
      uploadResults.push({
        s3Key: result.s3Key!,
        downloadUrl: result.downloadUrl!,
        originalName: file.name,
        size: file.size,
        mimeType: file.type
      });
    }

    console.log('All files uploaded successfully. Submitting to dashboard API...');

    // Submit to dashboard API to store in database
    const response = await fetch(`${DASHBOARD_URL}/api/website/quote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        firmName: formData.firmName,
        country: formData.country,
        caseDetails: formData.caseDetails,
        services: formData.services,
        uploadedFiles: uploadResults
      }),
    });

    console.log('Dashboard API response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Dashboard API error:', errorData);
      throw new Error(errorData.error || 'Failed to submit quote request');
    }

    const result = await response.json();
    console.log('Dashboard API success:', result);

    // Email notifications are handled by the dashboard API
    // No need to send emails from the website

    return {
      success: true,
      message: 'Quote request submitted successfully. You will receive a detailed quotation within 24-48 hours.',
      data: result
    };

  } catch (error) {
    console.error('Quote form submission error:', error);
    console.error('Error stack:', error.stack);
    throw new Error(error instanceof Error ? error.message : 'Failed to submit quote request. Please try again.');
  }
};

// Export types for use in components
export type { ContactFormData, QuoteFormData };