/**
 * Structured Data (JSON-LD) Generators
 * Creates Schema.org structured data for rich snippets
 */

// ============================================================================
// Types
// ============================================================================

/**
 * FAQ item interface
 */
export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Breadcrumb item interface
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

// ============================================================================
// Organization Schema
// ============================================================================

/**
 * Generate Organization schema
 * Provides information about the organization behind the website
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Convert Case",
    url: "https://convertcase.net",
    logo: "https://convertcase.net/logo.png",
    description: "Free online text case converter tool. Transform text to uppercase, lowercase, title case, and more.",
    sameAs: [
      "https://github.com/montasim",
      "https://linkedin.com/in/montasim"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "support@convertcase.net",
      availableLanguage: "English"
    }
  };
}

// ============================================================================
// WebSite Schema
// ============================================================================

/**
 * Generate WebSite schema
 * Provides information about the website for search engines
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Convert Case",
    alternateName: "Text Case Converter",
    url: "https://convertcase.net",
    description: "Free online text case converter tool. Transform text to uppercase, lowercase, title case, sentence case, and more.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://convertcase.net/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    publisher: {
      "@type": "Organization",
      name: "Convert Case",
      url: "https://convertcase.net"
    }
  };
}

// ============================================================================
// SoftwareApplication Schema
// ============================================================================

/**
 * Generate SoftwareApplication schema
 * Describes the converter tool as a software application
 */
export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Convert Case",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
      bestRating: "5",
      worstRating: "1"
    },
    description: "Fast, secure, and private online text case converter. Transform text to uppercase, lowercase, title case, sentence case, and more. Free tool with no sign-up required.",
    featureList: [
      "Uppercase conversion",
      "Lowercase conversion",
      "Title case conversion",
      "Sentence case conversion",
      "Capitalized case conversion",
      "Alternating case conversion",
      "Inverse case conversion"
    ],
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    softwareVersion: "1.0.0",
    author: {
      "@type": "Organization",
      name: "Convert Case"
    }
  };
}

// ============================================================================
// FAQPage Schema
// ============================================================================

/**
 * Generate FAQPage schema
 * Creates structured data for FAQ sections
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

/**
 * Default FAQs for the home page
 */
export const HOME_PAGE_FAQS: FAQItem[] = [
  {
    question: "Is this text case converter free to use?",
    answer: "Yes, Convert Case is completely free to use with no registration required. You can convert unlimited text without any hidden fees or subscriptions."
  },
  {
    question: "Is my text data secure and private?",
    answer: "Absolutely. All text conversions happen locally in your browser using JavaScript. Your text never leaves your device and is never sent to our servers. We don't store, log, or track any of the text you input."
  },
  {
    question: "What text case conversions are available?",
    answer: "We offer 7 different case conversions: Sentence case, lower case, UPPER CASE, Capitalized Case, Title Case, aLtErNaTiNg cAsE, and InVeRsE CaSe."
  },
  {
    question: "Do I need to create an account to use this tool?",
    answer: "No account required! Convert Case is designed to be simple and accessible. Just visit our website, paste your text, and convert instantly."
  },
  {
    question: "Can I use this tool on mobile devices?",
    answer: "Yes, Convert Case is fully responsive and works perfectly on all devices including smartphones, tablets, and desktop computers."
  },
  {
    question: "Is there a limit to how much text I can convert?",
    answer: "There's no limit to the amount of text you can convert. Our tool handles everything from single words to long documents with equal efficiency."
  }
];

/**
 * Privacy page FAQs
 */
export const PRIVACY_PAGE_FAQS: FAQItem[] = [
  {
    question: "Do you store my text data?",
    answer: "No, we do not store any text data. All conversions happen locally in your browser. Once you close the tab or refresh the page, your data is completely gone."
  },
  {
    question: "Do you use cookies?",
    answer: "We use minimalist cookies strictly for functional purposes, such as remembering your theme preference. We don't use tracking cookies or third-party analytics that compromise your privacy."
  },
  {
    question: "Is my email address safe if I contact you?",
    answer: "Yes, if you choose to contact us via email, your email address will only be used to respond to your inquiry. We never share your email with third parties."
  },
  {
    question: "Do you collect any personal information?",
    answer: "We do not collect any personal identification information (PII). We may use anonymous analytics to understand general usage patterns and improve our user experience, but this never includes the content you convert."
  }
];

/**
 * Terms page FAQs
 */
export const TERMS_PAGE_FAQS: FAQItem[] = [
  {
    question: "Can I use Convert Case for commercial purposes?",
    answer: "Yes, you may use our conversion engine for both personal and commercial use. There are no restrictions on how you use the converted text."
  },
  {
    question: "Are there any restrictions on using this service?",
    answer: "You may not use our service for any illegal purposes or attempt to disrupt the platform through automated scraping or abuse. Fair use is expected from all users."
  },
  {
    question: "What happens if I encounter an error in conversion?",
    answer: "While we strive for maximum accuracy, we recommend reviewing critical conversions manually. We provide this tool on an as-is basis and are not liable for any inaccuracies."
  }
];

// ============================================================================
// BreadcrumbList Schema
// ============================================================================

/**
 * Generate BreadcrumbList schema
 * Creates structured data for breadcrumb navigation
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Generate breadcrumbs for a specific page
 */
export function generatePageBreadcrumbs(route: string): BreadcrumbItem[] {
  const baseItem: BreadcrumbItem = {
    name: "Home",
    url: "https://convertcase.net"
  };

  switch (route) {
    case "/":
      return [baseItem];
    case "/contact":
      return [
        baseItem,
        { name: "Contact", url: "https://convertcase.net/contact" }
      ];
    case "/privacy":
      return [
        baseItem,
        { name: "Privacy Policy", url: "https://convertcase.net/privacy" }
      ];
    case "/terms":
      return [
        baseItem,
        { name: "Terms of Service", url: "https://convertcase.net/terms" }
      ];
    default:
      return [baseItem];
  }
}

// ============================================================================
// WebPage Schema
// ============================================================================

/**
 * Generate WebPage schema
 * Provides metadata about a specific webpage
 */
export function generateWebPageSchema(
  title: string,
  description: string,
  url: string,
  datePublished?: string,
  dateModified?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "Convert Case",
      url: "https://convertcase.net"
    },
    about: {
      "@type": "Thing",
      name: "Text Case Converter",
      description: "Online tool for converting text between different case formats"
    },
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified })
  };
}

// ============================================================================
// HowTo Schema
// ============================================================================

/**
 * Generate HowTo schema
 * Creates structured data for how-to guides
 */
export function generateHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Convert Text Case",
    description: "Learn how to convert text between different case formats using Convert Case",
    step: [
      {
        "@type": "HowToStep",
        name: "Enter Your Text",
        text: "Type or paste your text into the text area on the homepage."
      },
      {
        "@type": "HowToStep",
        name: "Choose Conversion Type",
        text: "Select the case conversion you want from the available options: Sentence case, lower case, UPPER CASE, Capitalized Case, Title Case, aLtErNaTiNg cAsE, or InVeRsE CaSe."
      },
      {
        "@type": "HowToStep",
        name: "View Result",
        text: "Your text will be instantly converted. You can see statistics like character count, word count, and line count."
      },
      {
        "@type": "HowToStep",
        name: "Copy or Download",
        text: "Use the copy button to copy the converted text to your clipboard, or the download button to save it as a text file."
      }
    ]
  };
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Convert schema object to JSON string for use in script tags
 */
export function schemaToJSON(schema: Record<string, unknown>): string {
  return JSON.stringify(schema);
}

/**
 * Generate complete structured data for a page
 */
export function generatePageStructuredData(
  route: string,
  title: string,
  description: string,
  includeFAQ: boolean = false,
  faqs?: FAQItem[]
): string[] {
  const schemas: Record<string, unknown>[] = [
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateSoftwareApplicationSchema(),
    generateWebPageSchema(title, description, `https://convertcase.net${route}`),
    generateBreadcrumbSchema(generatePageBreadcrumbs(route))
  ];

  if (includeFAQ && faqs) {
    schemas.push(generateFAQSchema(faqs));
  }

  return schemas.map(schemaToJSON);
}
