const K=21;
const ARR=[10,15,18,24,38];
function findBestMatch(k, arr){
    return arr.reduce((p,c)=>Math.abs(c-k)<Math.abs(p-k)?c:p);
}
console.log(findBestMatch(K,ARR))