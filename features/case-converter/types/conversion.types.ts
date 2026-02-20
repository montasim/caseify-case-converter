/**
 * Type definitions for the case converter feature
 */

import * as React from "react";
import type { ConversionOption, ConversionCategory } from "@/types";

/**
 * Extended conversion option with additional metadata
 */
export interface CaseConversionOption extends ConversionOption {
    /** Unique identifier */
    id: string;
    /** Display label */
    label: string;
    /** Conversion function */
    fn: (text: string) => string;
    /** Optional category */
    category?: ConversionCategory;
    /** Optional description */
    description?: string;
    /** Optional icon component */
    icon?: React.ComponentType<{ className?: string }>;
}

/**
 * Conversion function type
 */
export type ConversionFunction = (text: string) => string;

/**
 * Conversion category with label
 */
export interface ConversionCategoryWithLabel {
    /** Category value */
    value: ConversionCategory;
    /** Display label */
    label: string;
}

/**
 * Conversion state
 */
export interface ConversionState {
    /** Current text */
    text: string;
    /** Whether text has been copied */
    copied: boolean;
    /** Last conversion applied */
    lastConversion?: ConversionOption;
    /** Conversion history */
    history: ConversionHistoryEntry[];
}

/**
 * Entry in conversion history
 */
export interface ConversionHistoryEntry {
    /** Conversion applied */
    conversion: ConversionOption;
    /** Text before conversion */
    beforeText: string;
    /** Text after conversion */
    afterText: string;
    /** Timestamp */
    timestamp: Date;
}

/**
 * Available conversion categories
 */
export const CONVERSION_CATEGORIES: ConversionCategoryWithLabel[] = [
    { value: "basic", label: "Basic" },
    { value: "advanced", label: "Advanced" },
    { value: "custom", label: "Custom" },
] as const;
