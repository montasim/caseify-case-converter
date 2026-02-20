/**
 * Resend email service implementation
 * Implements IEmailService interface for Resend provider
 */

import { Resend } from "resend";
import type { IEmailService } from "./email-service.interface";
import type { EmailParams, EmailResult, ContactFormData } from "@/types";
import {
    getContactEmailHtml,
    getConfirmationEmailHtml,
} from "@/lib/email-templates";
import {
    EMAIL_SENDER_NAME,
    EMAIL_CONTACT_SENDER_NAME,
    EMAIL_CONFIRMATION_SUBJECT,
    EMAIL_CONTACT_SUBJECT_PREFIX,
} from "@/config/constants";
import { getEnvConfig } from "@/config/environment";

/**
 * Resend email service implementation
 */
export class ResendEmailService implements IEmailService {
    private client: Resend;
    private config: ReturnType<typeof getEnvConfig>;

    constructor(apiKey?: string) {
        const envConfig = getEnvConfig();
        this.config = envConfig;
        this.client = new Resend(apiKey || envConfig.resendApiKey);
    }

    /**
     * Send an email with the given parameters
     */
    async sendEmail(params: EmailParams): Promise<EmailResult> {
        try {
            const result = await this.client.emails.send({
                from: params.from,
                to: params.to,
                replyTo: params.replyTo,
                subject: params.subject,
                html: params.html,
                text: params.text,
            });

            if (result.error) {
                console.error("Resend email error:", result.error);
                return {
                    success: false,
                    error: result.error.message,
                };
            }

            return {
                success: true,
                data: result.data,
            };
        } catch (error) {
            console.error("Failed to send email:", error);
            return {
                success: false,
                error: error instanceof Error ? error.message : "Unknown error",
            };
        }
    }

    /**
     * Send a contact form email to the admin
     */
    async sendContactEmail(data: ContactFormData): Promise<EmailResult> {
        const params: EmailParams = {
            from: `${EMAIL_CONTACT_SENDER_NAME} <${this.config.emailFrom}>`,
            to: [this.config.contactEmail],
            replyTo: data.email,
            subject: `${EMAIL_CONTACT_SUBJECT_PREFIX} ${data.subject}`,
            html: getContactEmailHtml(
                data.name,
                data.email,
                data.subject,
                data.message
            ),
        };

        return this.sendEmail(params);
    }

    /**
     * Send a confirmation email to the user
     */
    async sendConfirmationEmail(
        email: string,
        name: string
    ): Promise<EmailResult> {
        const params: EmailParams = {
            from: `${EMAIL_SENDER_NAME} <${this.config.emailFrom}>`,
            to: [email],
            subject: EMAIL_CONFIRMATION_SUBJECT,
            html: getConfirmationEmailHtml(name),
        };

        return this.sendEmail(params);
    }
}
