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
