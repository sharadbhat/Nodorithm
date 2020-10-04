/**
 * Performs binary search.
 * @param {Number} base - Base.
 * @param {Number} expo - Exponent
 * @param {Number} [foo=Infinity] - Mod
 * @returns {Number} - x^y
 */

const fastPower=(base,exp,mod=Infinity)=>{
    if(exp==0)return 1;
    if(exp==1)return base%mod;
    t=fastPower(base,Math.floor(exp/2));
    t=(t*t)%mod;
    if(exp%2==0)return t;
    else 
    return ((base%mod)*t)%mod;
    
}
module.exports=fastPower;