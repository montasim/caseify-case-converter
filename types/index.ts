/**
 * Shared type definitions for the application
 */

// ============================================================================
// Text Statistics Types
// ============================================================================

/**
 * Statistics about text content
 */
export interface TextStats {
    /** Total number of characters including whitespace */
    characters: number;
    /** Total number of words */
    words: number;
    /** Total number of lines */
    lines: number;
}

// ============================================================================
// Conversion Types
// ============================================================================

/**
 * Type of conversion category
 */
export type ConversionCategory = "basic" | "advanced" | "custom";

/**
 * A text conversion option
 */
export interface ConversionOption {
    /** Unique identifier for the conversion */
    id: string;
    /** Display label for the conversion */
    label: string;
    /** Function that performs the conversion */
    fn: (text: string) => string;
    /** Optional category for grouping */
    category?: ConversionCategory;
    /** Optional description */
    description?: string;
}

/**
 * Result of a text conversion operation
 */
export interface ConversionResult {
    /** The converted text */
    text: string;
    /** The conversion that was applied */
    conversion: ConversionOption;
    /** Timestamp of the conversion */
    timestamp: Date;
}

// ============================================================================
// Email Types
// ============================================================================

/**
 * Parameters for sending an email
 */
export interface EmailParams {
    /** Email sender address */
    from: string;
    /** Recipient email addresses */
    to: string[];
    /** Reply-to address (optional) */
    replyTo?: string;
    /** Email subject */
    subject: string;
    /** Email HTML content */
    html: string;
    /** Email text content (optional) */
    text?: string;
}

/**
 * Result of an email sending operation
 */
export interface EmailResult {
    /** Whether the email was sent successfully */
    success: boolean;
    /** Response data from the email service */
    data?: unknown;
    /** Error message if sending failed */
    error?: string;
}

/**
 * Contact form data
 */
export interface ContactFormData {
    /** Sender's name */
    name: string;
    /** Sender's email address */
    email: string;
    /** Subject of the message */
    subject: string;
    /** Message content */
    message: string;
}

/**
 * Validation result for form data
 */
export interface ValidationResult<T = unknown> {
    /** Whether the data is valid */
    isValid: boolean;
    /** Validated data */
    data?: T;
    /** Error message if validation failed */
    error?: string;
}

// ============================================================================
// UI Component Types
// ============================================================================

/**
 * Props for stat badge components
 */
export interface StatBadgeProps {
    /** Icon component to display */
    icon: React.ComponentType<{ className?: string }>;
    /** Label for the stat */
    label: string;
    /** Value to display */
    value: number;
    /** Additional CSS classes */
    className?: string;
}

/**
 * Props for icon button components
 */
export interface IconButtonProps {
    /** Icon component to display */
    icon: React.ComponentType<{ className?: string }>;
    /** Tooltip text */
    tooltip: string;
    /** Click handler */
    onClick: () => void;
    /** Whether the button is disabled */
    disabled?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Whether to show success state */
    success?: boolean;
}

/**
 * Props for page header components
 */
export interface PageHeaderProps {
    /** Page title */
    title: string;
    /** Page description */
    description: string;
    /** Optional icon component */
    icon?: React.ComponentType<{ className?: string }>;
    /** Whether to use gradient text */
    gradient?: boolean;
    /** Additional CSS classes */
    className?: string;
}

/**
 * Props for info card components
 */
export interface InfoCardProps {
    /** Card title */
    title: string;
    /** Card description */
    description: string;
    /** Optional icon component */
    icon?: React.ComponentType<{ className?: string }>;
    /** Additional CSS classes */
    className?: string;
    /** Whether to center content */
    centered?: boolean;
}

/**
 * Props for page section components
 */
export interface PageSectionProps {
    /** Section title */
    title: string;
    /** Section content */
    children: React.ReactNode;
    /** Optional icon component */
    icon?: React.ComponentType<{ className?: string }>;
    /** Additional CSS classes */
    className?: string;
}

/**
 * Props for info grid components
 */
export interface InfoGridProps {
    /** Grid content */
    children: React.ReactNode;
    /** Number of columns (1-4) */
    cols?: 1 | 2 | 3 | 4;
    /** Additional CSS classes */
    className?: string;
}

/**
 * Props for content card components
 */
export interface ContentCardProps {
    /** Card content */
    children: React.ReactNode;
    /** Additional CSS classes */
    className?: string;
    /** Whether to show gradient bar */
    gradientBar?: boolean;
}

/**
 * Props for logo components
 */
export interface LogoProps {
    /** Additional CSS classes */
    className?: string;
    /** Icon size classes */
    iconSize?: string;
    /** Text size classes */
    textSize?: string;
    /** Whether to show text */
    showText?: boolean;
}

// ============================================================================
// Navigation Types
// ============================================================================

/**
 * Navigation link configuration
 */
export interface NavLink {
    /** URL path */
    href: string;
    /** Link label */
    label: string;
}

/**
 * Social media link configuration
 */
export interface SocialLink {
    /** Link label */
    label: string;
    /** Link URL */
    href: string;
}

// ============================================================================
// Server Action Types
// ============================================================================

/**
 * Result of a server action
 */
export interface ActionResult<T = unknown> {
    /** Whether the action was successful */
    success: boolean;
    /** Result data */
    data?: T;
    /** Error message if action failed */
    error?: string;
}

// ============================================================================
// Theme Types
// ============================================================================

/**
 * Available theme modes
 */
export type ThemeMode = "light" | "dark" | "system";
