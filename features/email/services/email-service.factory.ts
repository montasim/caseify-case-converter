/**
 * Email service factory
 * Creates email service instances based on configuration
 */

import type { IEmailService } from "./email-service.interface";
import { ResendEmailService } from "./resend-email.service";
import { getEnvConfig } from "@/config/environment";

/**
 * Creates an email service instance based on environment configuration
 * 
 * @returns Email service instance
 * @throws {Error} If email service cannot be initialized
 */
export function createEmailService(): IEmailService {
    try {
        const config = getEnvConfig();
        return new ResendEmailService(config.resendApiKey);
    } catch (error) {
        throw new Error(
            `Failed to create email service: ${error instanceof Error ? error.message : "Unknown error"}`
        );
    }
}

/**
 * Singleton instance of the email service
 * Cached to avoid creating multiple instances
 */
let emailServiceInstance: IEmailService | null = null;

/**
 * Get or create the email service singleton
 * 
 * @returns Email service instance
 */
export function getEmailService(): IEmailService {
    if (!emailServiceInstance) {
        emailServiceInstance = createEmailService();
    }
    return emailServiceInstance;
}

/**
 * Reset the email service singleton
 * Useful for testing or when configuration changes
 */
export function resetEmailService(): void {
    emailServiceInstance = null;
}
