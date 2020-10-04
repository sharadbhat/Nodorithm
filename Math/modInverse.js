/**
 * Performs binary search.
 * @param {Number} n - Number
 * @param {Number} mod - Mod 
 * @returns {Number} - Mod Inverse
 */

const modInverse=(a,m)=>{
    a=a%m;
    for(let x=1;x<m;x++){
        if((a*x)%m==1)return x
    }
}
module.exports=modInverse;