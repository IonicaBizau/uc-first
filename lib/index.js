/**
 * ucFirst
 * Uppercase the first character in the string.
 * @name ucFirst
 * @function
 * @param {string} input Input string.
 * @returns {string} Output string.
 */
export default function ucFirst (input) {
    if (!input || !input.length || typeof input !== "string") {
        return "";
    }
    return input.charAt(0).toUpperCase() + input.slice(1);
};