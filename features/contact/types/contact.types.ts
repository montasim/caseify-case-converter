/**
 * Type definitions for the contact feature
 */

import type { SocialLink } from "@/types";

/**
 * Contact information item
 */
export interface ContactInfoItem {
    /** Title of the info item */
    title: string;
    /** Description or value */
    description: string;
    /** Icon component name (for mapping) */
    icon: "mail" | "message-square" | "globe";
}

/**
 * Contact form submission state
 */
export type ContactFormState =
    | "idle"
    | "submitting"
    | "success"
    | "error";

/**
 * Contact form state with optional error message
 */
export interface ContactFormStateWithMessage {
    /** Current state */
    state: ContactFormState;
    /** Error message if state is error */
    errorMessage?: string;
}

/**
 * Social links configuration
 */
export const CONTACT_SOCIAL_LINKS: SocialLink[] = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/montasim" },
    { label: "GitHub", href: "https://github.com/montasim" },
] as const;
