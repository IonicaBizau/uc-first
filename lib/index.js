"use strict";

/**
 * ucFirst
 * Uppercase the first character in the string.
 *
 * @name ucFirst
 * @function
 * @param {Number} a Param descrpition.
 * @param {Number} b Param descrpition.
 * @return {Number} Return description.
 */
module.exports = function ucFirst (input) {
    return input[0].toUpperCase() + input.slice(1);
};
