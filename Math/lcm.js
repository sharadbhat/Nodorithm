/**
 * Performs binary search.
 * @param {Number} number - First Number.
 * @param {Number} number - Second Number
 * @returns {Number} - LCM of a and b.
 */
const gcd=require("./gcd.js");
const lcm=(a,b)=>{
    return (a/gcd(a,b))*b
}
module.exports = lcm;