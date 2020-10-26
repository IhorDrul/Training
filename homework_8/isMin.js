function isMin(){
    console.log(arguments);
    let min = arguments[0];
    for(let i = 0;i<arguments.length-1;i++){
        if(min>arguments[i]){
            min=arguments[i];
        }
    }
    return min;
}
console.log(isMin(0,-3,5,6,1,-3,17));