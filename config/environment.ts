/**
 * Environment configuration and validation
 * Ensures all required environment variables are present at runtime
 */

/**
 * Interface for validated environment variables
 */
export interface EnvConfig {
    // Server-side secrets (no NEXT_PUBLIC_ prefix)
    resendApiKey: string;
    contactEmail: string;
    emailFrom: string;
    
    // Public variables (NEXT_PUBLIC_ prefix)
    siteUrl: string;
}

/**
 * Validates and returns environment configuration
 * Throws an error if required variables are missing (unless in build mode)
 * 
 * @throws {Error} If required environment variables are missing
 * @returns Validated environment configuration
 */
export function getEnvConfig(): EnvConfig {
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
    const emailFrom = process.env.NEXT_PUBLIC_EMAIL_FROM;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://convertcase.net";

    // During build time, we may not have environment variables
    // Allow missing variables during build but provide defaults
    const isBuildTime = process.env.NEXT_PHASE === "phase-production-build" || 
                       process.env.NODE_ENV === undefined;

    // Validate server-side secrets (skip during build time)
    if (!resendApiKey && !isBuildTime) {
        throw new Error(
            "Missing required environment variable: RESEND_API_KEY. " +
            "Please add it to your .env.local file."
        );
    }

    // Validate public variables (skip during build time)
    if (!contactEmail && !isBuildTime) {
        throw new Error(
            "Missing required environment variable: NEXT_PUBLIC_CONTACT_EMAIL. " +
            "Please add it to your .env.local file."
        );
    }

    if (!emailFrom && !isBuildTime) {
        throw new Error(
            "Missing required environment variable: NEXT_PUBLIC_EMAIL_FROM. " +
            "Please add it to your .env.local file."
        );
    }

    return {
        resendApiKey: resendApiKey || "",
        contactEmail: contactEmail || "",
        emailFrom: emailFrom || "",
        siteUrl,
    };
}

/**
 * Gets a single environment variable with optional default value
 * 
 * @param key - Environment variable key
 * @param defaultValue - Default value if key is not found
 * @returns Environment variable value or default
 */
export function getEnvVar(key: string, defaultValue?: string): string {
    const value = process.env[key];
    if (value === undefined && defaultValue === undefined) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value ?? defaultValue ?? "";
}

/**
 * Checks if the application is running in development mode
 */
export function isDevelopment(): boolean {
    return process.env.NODE_ENV === "development";
}

/**
 * Checks if the application is running in production mode
 */
export function isProduction(): boolean {
    return process.env.NODE_ENV === "production";
}

/**
 * Checks if the application is running in test mode
 */
export function isTest(): boolean {
    return process.env.NODE_ENV === "test";
}

/**
 * Gets the current environment
 */
export function getEnvironment(): "development" | "production" | "test" {
    const env = process.env.NODE_ENV;
    if (env === "development" || env === "production" || env === "test") {
        return env;
    }
    return "development"; // Default to development
}
