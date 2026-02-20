/**
 * Contact information constants
 */

import type { ContactInfoItem } from "../types/contact.types";
import {
    SOCIAL_LINKS,
    LIVE_SUPPORT_HOURS,
    GLOBAL_REACH_DESCRIPTION,
} from "@/config/constants";

/**
 * Gets contact information items
 * Lazily evaluates environment config to avoid build-time errors
 * 
 * @returns Contact information items
 */
export async function getContactInfoItems(): Promise<ContactInfoItem[]> {
    // Dynamically import to avoid build-time evaluation
    const { getEnvConfig } = await import("@/config/environment");
    const contactEmail = getEnvConfig().contactEmail;

    return [
        {
            title: "Email Us",
            description: contactEmail,
            icon: "mail",
        },
        {
            title: "Live Support",
            description: LIVE_SUPPORT_HOURS,
            icon: "message-square",
        },
        {
            title: "Global Reach",
            description: GLOBAL_REACH_DESCRIPTION,
            icon: "globe",
        },
    ];
}

/**
 * Social links for the contact page
 */
export { SOCIAL_LINKS };

/**
 * Contact form field names
 */
export const CONTACT_FORM_FIELDS = {
    NAME: "name",
    EMAIL: "email",
    SUBJECT: "subject",
    MESSAGE: "message",
} as const;

/**
 * Contact form placeholders
 */
export const CONTACT_FORM_PLACEHOLDERS = {
    NAME: "Enter your name",
    EMAIL: "john@example.com",
    SUBJECT: "How can we help?",
    MESSAGE: "Tell us more about your inquiry...",
} as const;

/**
 * Contact form labels
 */
export const CONTACT_FORM_LABELS = {
    NAME: "Full Name",
    EMAIL: "Email Address",
    SUBJECT: "Subject",
    MESSAGE: "Message",
} as const;
