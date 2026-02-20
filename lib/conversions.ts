/**
 * Text conversion functions
 * Provides various text case transformations
 */

import { TITLE_CASE_SMALL_WORDS_PATTERN } from "@/config/constants";

/**
 * Converts text to sentence case
 * Capitalizes the first letter of each sentence
 * 
 * @param text - Input text
 * @returns Text in sentence case
 */
export const toSentenceCase = (text: string): string => {
    return text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
};

/**
 * Converts text to lowercase
 * 
 * @param text - Input text
 * @returns Text in lowercase
 */
export const toLowerCase = (text: string): string => {
    return text.toLowerCase();
};

/**
 * Converts text to uppercase
 * 
 * @param text - Input text
 * @returns Text in uppercase
 */
export const toUpperCase = (text: string): string => {
    return text.toUpperCase();
};

/**
 * Converts text to capitalized case
 * Capitalizes the first letter of each word
 * 
 * @param text - Input text
 * @returns Text in capitalized case
 */
export const toCapitalizedCase = (text: string): string => {
    return text.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
};

/**
 * Converts text to alternating case
 * Alternates between lowercase and uppercase letters
 * 
 * @param text - Input text
 * @returns Text in alternating case
 */
export const toAlternatingCase = (text: string): string => {
    return text.split('').map((char, index) => {
        return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
    }).join('');
};

/**
 * Converts text to title case
 * Capitalizes words except for small articles and prepositions
 * 
 * @param text - Input text
 * @returns Text in title case
 */
export const toTitleCase = (text: string): string => {
    return text.toLowerCase().split(' ').map((word, index, array) => {
        // Keep small words lowercase unless they're the first or last word
        if (index > 0 && index < array.length - 1 && word.match(TITLE_CASE_SMALL_WORDS_PATTERN)) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
};

/**
 * Converts text to inverse case
 * Inverts the case of each letter
 * 
 * @param text - Input text
 * @returns Text in inverse case
 */
export const toInverseCase = (text: string): string => {
    return text.split('').map(char =>
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join('');
};

/**
 * Converts text to kebab-case
 * Words are separated by hyphens and all letters are lowercase
 * 
 * @param text - Input text
 * @returns Text in kebab-case
 */
export const toKebabCase = (text: string): string => {
    // Split by spaces, underscores, hyphens, or camelCase boundaries
    const words = text
        .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase to space-separated
        .replace(/[_-]+/g, ' ') // Replace underscores and hyphens with spaces
        .split(/\s+/) // Split by whitespace
        .filter(word => word.length > 0); // Remove empty strings
    
    return words
        .map(word => word.toLowerCase())
        .join('-');
};

/**
 * Converts text to snake_case
 * Words are separated by underscores and all letters are lowercase
 * 
 * @param text - Input text
 * @returns Text in snake_case
 */
export const toSnakeCase = (text: string): string => {
    // Split by spaces, underscores, hyphens, or camelCase boundaries
    const words = text
        .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase to space-separated
        .replace(/[_-]+/g, ' ') // Replace underscores and hyphens with spaces
        .split(/\s+/) // Split by whitespace
        .filter(word => word.length > 0); // Remove empty strings
    
    return words
        .map(word => word.toLowerCase())
        .join('_');
};

/**
 * Converts text to camelCase
 * First word is lowercase, subsequent words are capitalized
 * 
 * @param text - Input text
 * @returns Text in camelCase
 */
export const toCamelCase = (text: string): string => {
    // Split by spaces, underscores, hyphens, or camelCase boundaries
    const words = text
        .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase to space-separated
        .replace(/[_-]+/g, ' ') // Replace underscores and hyphens with spaces
        .split(/\s+/) // Split by whitespace
        .filter(word => word.length > 0); // Remove empty strings
    
    if (words.length === 0) return '';
    
    return words
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
};

/**
 * Converts text to PascalCase
 * All words are capitalized (also known as UpperCamelCase)
 * 
 * @param text - Input text
 * @returns Text in PascalCase
 */
export const toPascalCase = (text: string): string => {
    // Split by spaces, underscores, hyphens, or camelCase boundaries
    const words = text
        .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase to space-separated
        .replace(/[_-]+/g, ' ') // Replace underscores and hyphens with spaces
        .split(/\s+/) // Split by whitespace
        .filter(word => word.length > 0); // Remove empty strings
    
    if (words.length === 0) return '';
    
    return words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
};

/**
 * Converts text to CONSTANT_CASE
 * All letters are uppercase and words are separated by underscores
 * 
 * @param text - Input text
 * @returns Text in CONSTANT_CASE
 */
export const toConstantCase = (text: string): string => {
    // Split by spaces, underscores, hyphens, or camelCase boundaries
    const words = text
        .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase to space-separated
        .replace(/[_-]+/g, ' ') // Replace underscores and hyphens with spaces
        .split(/\s+/) // Split by whitespace
        .filter(word => word.length > 0); // Remove empty strings
    
    return words
        .map(word => word.toUpperCase())
        .join('_');
};

/**
 * Converts text to dot.case
 * Words are separated by dots and all letters are lowercase
 * 
 * @param text - Input text
 * @returns Text in dot.case
 */
export const toDotCase = (text: string): string => {
    // Split by spaces, underscores, hyphens, dots, or camelCase boundaries
    const words = text
        .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase to space-separated
        .replace(/[_.-]+/g, ' ') // Replace underscores, hyphens, and dots with spaces
        .split(/\s+/) // Split by whitespace
        .filter(word => word.length > 0); // Remove empty strings
    
    return words
        .map(word => word.toLowerCase())
        .join('.');
};

/**
 * Converts text to slug-case
 * URL-friendly format with lowercase letters and hyphens
 * Removes special characters and normalizes whitespace
 * 
 * @param text - Input text
 * @returns Text in slug-case format
 */
export const toSlugCase = (text: string): string => {
    // Convert to lowercase
    let slug = text.toLowerCase();
    
    // Replace camelCase with spaces
    slug = slug.replace(/([a-z])([A-Z])/g, '$1-$2');
    
    // Replace spaces, underscores, and other separators with hyphens
    slug = slug.replace(/[\s_]+/g, '-');
    
    // Remove special characters except letters, numbers, and hyphens
    slug = slug.replace(/[^a-z0-9-]/g, '');
    
    // Remove multiple consecutive hyphens
    slug = slug.replace(/-+/g, '-');
    
    // Remove leading and trailing hyphens
    slug = slug.replace(/^-+|-+$/g, '');
    
    return slug;
};
