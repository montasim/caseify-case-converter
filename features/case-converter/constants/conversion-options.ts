/**
 * Conversion options configuration
 * Extensible and maintainable list of text transformations
 */

import type { CaseConversionOption } from "../types/conversion.types";
import {
    toSentenceCase,
    toLowerCase,
    toUpperCase,
    toCapitalizedCase,
    toAlternatingCase,
    toTitleCase,
    toInverseCase,
} from "@/lib/conversions";

/**
 * Available text conversion options
 * Organized by category for better UX
 */
export const CONVERSION_OPTIONS: CaseConversionOption[] = [
    // Basic conversions
    {
        id: "sentence-case",
        label: "Sentence case",
        fn: toSentenceCase,
        category: "basic",
        description: "Capitalize the first letter of each sentence",
    },
    {
        id: "lower-case",
        label: "lower case",
        fn: toLowerCase,
        category: "basic",
        description: "Convert all text to lowercase",
    },
    {
        id: "upper-case",
        label: "UPPER CASE",
        fn: toUpperCase,
        category: "basic",
        description: "Convert all text to uppercase",
    },
    {
        id: "capitalized-case",
        label: "Capitalized Case",
        fn: toCapitalizedCase,
        category: "basic",
        description: "Capitalize the first letter of each word",
    },
    // Advanced conversions
    {
        id: "title-case",
        label: "Title Case",
        fn: toTitleCase,
        category: "advanced",
        description: "Capitalize words except for small articles and prepositions",
    },
    {
        id: "alternating-case",
        label: "aLtErNaTiNg cAsE",
        fn: toAlternatingCase,
        category: "advanced",
        description: "Alternate between lowercase and uppercase letters",
    },
    {
        id: "inverse-case",
        label: "InVeRsE CaSe",
        fn: toInverseCase,
        category: "advanced",
        description: "Invert the case of each letter",
    },
] as const;

/**
 * Get conversion options by category
 */
export function getConversionsByCategory(
    category: "basic" | "advanced" | "custom"
): CaseConversionOption[] {
    return CONVERSION_OPTIONS.filter((option) => option.category === category);
}

/**
 * Get conversion option by ID
 */
export function getConversionById(
    id: string
): CaseConversionOption | undefined {
    return CONVERSION_OPTIONS.find((option) => option.id === id);
}

/**
 * Get all conversion IDs
 */
export function getConversionIds(): string[] {
    return CONVERSION_OPTIONS.map((option) => option.id);
}

/**
 * Check if a conversion ID is valid
 */
export function isValidConversionId(id: string): boolean {
    return getConversionIds().includes(id);
}
