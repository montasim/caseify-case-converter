/**
 * SEO Configuration Constants
 * Centralized SEO metadata and utilities for the application
 */

// ============================================================================
// Site Information
// ============================================================================

/**
 * Site name used across all pages
 */
export const SITE_NAME = "Convert Case";

/**
 * Main website URL
 */
export const SITE_URL = "https://convertcase.net";

/**
 * Default page title
 */
export const DEFAULT_TITLE = "Convert Case - Free Online Text Case Converter";

/**
 * Default page description
 */
export const DEFAULT_DESCRIPTION = "Fast, secure, and private online text case converter. Transform text to uppercase, lowercase, title case, sentence case, and more. Free tool with no sign-up required.";

/**
 * Default keywords for the site
 */
export const DEFAULT_KEYWORDS = [
  "text case converter",
  "case changer",
  "uppercase converter",
  "lowercase converter",
  "title case converter",
  "sentence case",
  "text transformation",
  "string converter",
  "online text tool",
  "free case converter"
].join(", ");

/**
 * Site author/publisher
 */
export const SITE_AUTHOR = "Convert Case Team";

/**
 * Twitter handle
 */
export const TWITTER_HANDLE = "@convertcase";

// ============================================================================
// Open Graph Configuration
// ============================================================================

/**
 * Default Open Graph image
 */
export const OG_DEFAULT_IMAGE = "/og-image.png";

/**
 * Open Graph image dimensions
 */
export const OG_IMAGE_WIDTH = 1200;

/**
 * Open Graph image height
 */
export const OG_IMAGE_HEIGHT = 630;

/**
 * Default Open Graph type
 */
export const OG_TYPE = "website";

/**
 * Default Open Graph locale
 */
export const OG_LOCALE = "en_US";

// ============================================================================
// Twitter Card Configuration
// ============================================================================

/**
 * Default Twitter Card type
 */
export const TWITTER_CARD = "summary_large_image";

// ============================================================================
// Robots Configuration
// ============================================================================

/**
 * Default robots configuration
 */
export const ROBOTS_CONFIG = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
} as const;

// ============================================================================
// Page-Specific SEO Data
// ============================================================================

/**
 * Home page SEO configuration
 */
export const HOME_PAGE_SEO = {
  title: "Free Online Text Case Converter | Convert Uppercase, Lowercase, Title Case",
  description: "Transform your text instantly with our free online case converter. Convert to uppercase, lowercase, title case, sentence case, and more. Fast, secure, and private - no sign-up required.",
  keywords: [
    "text case converter",
    "uppercase converter",
    "lowercase converter",
    "title case converter",
    "sentence case",
    "alternating case",
    "inverse case",
    "free text tool",
    "online text transformation"
  ].join(", "),
  ogImage: "/og-home.png",
  canonical: `${SITE_URL}/`,
} as const;

/**
 * Contact page SEO configuration
 */
export const CONTACT_PAGE_SEO = {
  title: "Contact Us | Convert Case Support",
  description: "Get in touch with the Convert Case team for support, feedback, or inquiries. We're here to help improve your text conversion experience.",
  keywords: [
    "contact support",
    "customer service",
    "feedback",
    "help",
    "support team"
  ].join(", "),
  ogImage: "/og-contact.png",
  canonical: `${SITE_URL}/contact`,
} as const;

/**
 * Privacy page SEO configuration
 */
export const PRIVACY_PAGE_SEO = {
  title: "Privacy Policy | Convert Case",
  description: "Learn how Convert Case protects your privacy. All text conversions happen locally in your browser. We don't store or track your data.",
  keywords: [
    "privacy policy",
    "data protection",
    "secure text conversion",
    "local processing",
    "no data storage"
  ].join(", "),
  ogImage: "/og-privacy.png",
  canonical: `${SITE_URL}/privacy`,
} as const;

/**
 * Terms page SEO configuration
 */
export const TERMS_PAGE_SEO = {
  title: "Terms of Service | Convert Case",
  description: "Read the terms of service for using Convert Case. Simple, transparent terms for our free online text case converter tool.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "usage policy",
    "fair use",
    "free text tool"
  ].join(", "),
  ogImage: "/og-terms.png",
  canonical: `${SITE_URL}/terms`,
} as const;

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Generate Open Graph metadata object
 */
export function generateOpenGraphMetadata(
  title: string,
  description: string,
  url: string,
  image?: string
) {
  return {
    title,
    description,
    url,
    siteName: SITE_NAME,
    images: image ? [
      {
        url: image,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: title,
      }
    ] : [
      {
        url: OG_DEFAULT_IMAGE,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: title,
      }
    ],
    locale: OG_LOCALE,
    type: OG_TYPE,
  };
}

/**
 * Generate Twitter Card metadata object
 */
export function generateTwitterMetadata(
  title: string,
  description: string,
  image?: string
) {
  return {
    card: TWITTER_CARD,
    title,
    description,
    images: image ? [image] : [OG_DEFAULT_IMAGE],
    creator: TWITTER_HANDLE,
  };
}

/**
 * Generate alternates metadata object
 */
export function generateAlternatesMetadata(canonical: string) {
  return {
    canonical,
  };
}

/**
 * Get page-specific SEO configuration by route
 */
export function getPageSEO(route: string) {
  switch (route) {
    case "/":
      return HOME_PAGE_SEO;
    case "/contact":
      return CONTACT_PAGE_SEO;
    case "/privacy":
      return PRIVACY_PAGE_SEO;
    case "/terms":
      return TERMS_PAGE_SEO;
    default:
      return {
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        keywords: DEFAULT_KEYWORDS,
        ogImage: OG_DEFAULT_IMAGE,
        canonical: `${SITE_URL}${route}`,
      };
  }
}
