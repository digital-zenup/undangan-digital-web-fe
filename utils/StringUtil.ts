/**
 * Convert a string to capitalize case.
 * @param {string} text - The string to convert.
 * @returns {string} The converted string.
 */
export const toCapitalizeCase = (text: string) => text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);

/**
 * Convert a string to lower case.
 * @param {string} text - The string to convert.
 * @returns {string} The converted string.
 */
export const toLowerCase = (text: string) => text.toLowerCase();

/**
 * Convert a string to upper case.
 * @param {string} text - The string to convert.
 * @returns {string} The converted string.
 */
export const toUpperCase = (text: string) => text.toUpperCase();
