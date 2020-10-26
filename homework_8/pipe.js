function pipe (){
    let [num, ...func] = arguments;
    let a ;
    console.log(num);
    console.log(func);
    for(let i=0;i<func.length;i++){
        console.log(i);
        console.log(func[i]);
        num = func[i](num);
    }
    return num;
}

function addOne(x) {
    return x*x;
  }
  
//pipe(1, addOne); //=> 2
console.log(pipe(2, addOne, addOne)); //=> 3 
 