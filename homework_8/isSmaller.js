function isSmaller(a,b){
    var val = isBigger(a,b);
    return !val;
}

console.log(isSmaller(5,2));
console.log(isSmaller(2,5));