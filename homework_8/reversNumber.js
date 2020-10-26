function reversNumber(a){
    let sum=0;
    let b;
    while(Math.abs(a)>0){
        console.log(typeof(a));
        b=a%10;
        sum=sum*10+b;
        a=parseInt(a/10);
    }
    return sum;
}
console.log(reversNumber(135));
console.log(reversNumber(-7654321));
console.log(reversNumber(-1234));