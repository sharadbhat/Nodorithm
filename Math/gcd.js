/**
 * Performs binary search.
 * @param {Number} number - First Number.
 * @param {Number} number - Second Number
 * @returns {Number} - GCD of a and b.
 */

const gcd = (a,b) => {
    if(a==0)return b;
    return gcd(b%a,a);
};

module.exports = gcd;