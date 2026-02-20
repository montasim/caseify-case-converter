/**
 * Email service interface
 * Following Dependency Inversion Principle - depends on abstractions, not concretions
 */

import type { EmailParams, EmailResult, ContactFormData } from "@/types";

/**
 * Interface for email service providers
 * Any email provider (Resend, SendGrid, etc.) can implement this interface
 */
export interface IEmailService {
    /**
     * Send an email with the given parameters
     * 
     * @param params - Email parameters (from, to, subject, html, etc.)
     * @returns Promise resolving to email result
     */
    sendEmail(params: EmailParams): Promise<EmailResult>;

    /**
     * Send a contact form email to the admin
     * 
     * @param data - Contact form data
     * @returns Promise resolving to email result
     */
    sendContactEmail(data: ContactFormData): Promise<EmailResult>;

    /**
     * Send a confirmation email to the user
     * 
     * @param email - Recipient email address
     * @param name - Recipient name
     * @returns Promise resolving to email result
     */
    sendConfirmationEmail(email: string, name: string): Promise<EmailResult>;
}

/**
 * Factory function type for creating email service instances
 */
export type EmailServiceFactory = () => IEmailService;
