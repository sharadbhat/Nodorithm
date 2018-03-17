/**
 * Performs binary search.
 * @param {string} string - The string to be capitalized.
 * @returns {string} - Capitalized string.
 */
const capitalizeFirstLetter = (string) => {
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

module.exports = capitalizeFirstLetter;
