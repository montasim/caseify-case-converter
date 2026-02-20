"use server";

import type { ActionResult, ContactFormData } from "@/types";
import { getEmailService } from "@/features/email/services/email-service.factory";
import { ERROR_REQUIRED_FIELDS, ERROR_SERVER } from "@/config/constants";

/**
 * Validates contact form data
 * 
 * @param formData - Form data from the contact form
 * @returns Validation result with contact data or error
 */
function validateContactForm(formData: FormData): ActionResult<ContactFormData> {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !subject || !message) {
        return {
            success: false,
            error: ERROR_REQUIRED_FIELDS,
        };
    }

    return {
        success: true,
        data: { name, email, subject, message },
    };
}

/**
 * Sends an email via the contact form
 * Server action that validates form data and sends emails
 * 
 * @param formData - Form data from the contact form
 * @returns Action result indicating success or failure
 */
export async function sendEmail(formData: FormData): Promise<ActionResult> {
    // Validate form data
    const validationResult = validateContactForm(formData);
    
    if (!validationResult.success || !validationResult.data) {
        return {
            success: false,
            error: validationResult.error || ERROR_REQUIRED_FIELDS,
        };
    }

    const contactData = validationResult.data;

    try {
        const emailService = getEmailService();

        // Send email to admin
        const adminEmailResult = await emailService.sendContactEmail(contactData);

        if (!adminEmailResult.success) {
            console.error("Failed to send admin email:", adminEmailResult.error);
            return {
                success: false,
                error: adminEmailResult.error || ERROR_SERVER,
            };
        }

        // Send confirmation email to user (non-blocking)
        try {
            await emailService.sendConfirmationEmail(contactData.email, contactData.name);
        } catch (confirmErr) {
            // Don't fail the whole action if confirmation email fails
            console.error("Failed to send confirmation email:", confirmErr);
        }

        return {
            success: true,
            data: adminEmailResult.data,
        };
    } catch (err) {
        console.error("Server error:", err);
        return {
            success: false,
            error: ERROR_SERVER,
        };
    }
}
