"use strict";

/**
 * ucFirst
 * Uppercase the first character in the string.
 *
 * @name ucFirst
 * @function
 * @param {String} input Input string.
 * @return {String} Output string.
 */
module.exports = function ucFirst (input) {
    return (!input || !input.length || typeof input !== 'string')
        ? ''
        : `${input.charAt(0).toUpperCase()}${input.slice(1)}`;    
};
