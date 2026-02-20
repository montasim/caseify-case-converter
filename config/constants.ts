/**
 * Application-wide constants
 * Centralized to eliminate magic strings and numbers
 */

// ============================================================================
// UI/UX Constants
// ============================================================================

/**
 * Duration (in milliseconds) to show copy feedback
 */
export const COPY_FEEDBACK_DURATION = 2000;

/**
 * Default filename for downloaded text files
 */
export const DOWNLOAD_FILENAME = "converted-text.txt";

/**
 * Default MIME type for text downloads
 */
export const TEXT_MIME_TYPE = "text/plain";

// ============================================================================
// Stat Badge Colors
// ============================================================================

/**
 * Color mapping for stat badges
 * Maps stat type to its corresponding Tailwind color class
 */
export const STAT_COLORS: Record<string, string> = {
    Characters: "text-primary",
    Words: "text-chart-2",
    Lines: "text-chart-5",
} as const;

/**
 * Type guard for valid stat color keys
 */
export function isValidStatColorKey(key: string): key is keyof typeof STAT_COLORS {
    return key in STAT_COLORS;
}

// ============================================================================
// Email Constants
// ============================================================================

/**
 * Default sender name for emails
 */
export const EMAIL_SENDER_NAME = "Convert Case";

/**
 * Default sender name for contact form emails
 */
export const EMAIL_CONTACT_SENDER_NAME = "Convert Case Contact";

/**
 * Subject prefix for contact form emails
 */
export const EMAIL_CONTACT_SUBJECT_PREFIX = "Contact Form:";

/**
 * Confirmation email subject
 */
export const EMAIL_CONFIRMATION_SUBJECT = "We've received your message!";

/**
 * Website URL for email links
 */
export const WEBSITE_URL = "https://convertcase.net";

/**
 * Email footer copyright text template
 */
export const EMAIL_FOOTER_TEMPLATE = (year: number) => `© ${year} Convert Case. All rights reserved.`;

// ============================================================================
// Contact Form Constants
// ============================================================================

/**
 * Social media links for contact page
 */
export const SOCIAL_LINKS = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/montasim" },
    { label: "GitHub", href: "https://github.com/montasim" },
] as const;

/**
 * Live support availability text
 */
export const LIVE_SUPPORT_HOURS = "Available Mon-Fri, 9am - 5pm BST";

/**
 * Global reach description
 */
export const GLOBAL_REACH_DESCRIPTION = "Trusted by users worldwide";

// ============================================================================
// Conversion Constants
// ============================================================================

/**
 * Small words that should remain lowercase in title case
 * Based on standard title case rules
 */
export const TITLE_CASE_SMALL_WORDS = [
    "a", "an", "and", "as", "at", "but", "by", "en", "for",
    "if", "in", "nor", "of", "on", "or", "per", "the", "to",
    "v.", "vs.", "via",
] as const;

/**
 * Regex pattern for title case small words
 */
export const TITLE_CASE_SMALL_WORDS_PATTERN = new RegExp(
    `^(?:${TITLE_CASE_SMALL_WORDS.join("|")})$`,
    "i"
);

// ============================================================================
// Error Messages
// ============================================================================

/**
 * Error message for missing required form fields
 */
export const ERROR_REQUIRED_FIELDS = "All fields are required";

/**
 * Error message for missing email configuration
 */
export const ERROR_EMAIL_CONFIG_MISSING = "Email configuration is missing";

/**
 * Generic server error message
 */
export const ERROR_SERVER = "Failed to send email. Please try again later.";

/**
 * Error message for missing API key
 */
export const ERROR_MISSING_API_KEY = "Missing RESEND_API_KEY environment variable";

// ============================================================================
// Page Metadata
// ============================================================================

/**
 * Default page title suffix
 */
export const PAGE_TITLE_SUFFIX = " - Convert Case";

/**
 * Default page description
 */
export const PAGE_DEFAULT_DESCRIPTION = "Fast, secure, and private online text case converter. Transform your text instantly with premium accuracy and a clean interface.";

/**
 * Site name
 */
export const SITE_NAME = "Convert Case";

// ============================================================================
// Animation Constants
// ============================================================================

/**
 * Default animation duration for fade-in effects (in milliseconds)
 */
export const FADE_IN_DURATION = 300;

/**
 * Default animation duration for scale effects (in milliseconds)
 */
export const SCALE_DURATION = 300;

// ============================================================================
// Validation Constants
// ============================================================================

/**
 * Maximum length for contact form message
 */
export const CONTACT_MESSAGE_MAX_LENGTH = 1000;

/**
 * Maximum length for contact form subject
 */
export const CONTACT_SUBJECT_MAX_LENGTH = 100;

/**
 * Email validation regex pattern
 */
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
