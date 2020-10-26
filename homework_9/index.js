// Your code goes here
function findTypes(){
    let argTypes = [];
    for(let i = 0; i < arguments.length; i++){
        argTypes.push(typeof(arguments[i]));
    }
    return argTypes;
}

console.log(findTypes('number',14, true));



function executeForEach(arr,func){
    let val=[];
    for(let i=0;i<arr.length;i++){
        func(arr[i]);
    }
}

executeForEach([3,4,5,6,7,8], function(el) { console.log(el) }) 

function mapArray(arr, func){
    let newArr = [];
    for(let i = 0; i<arr.length;i++){
        newArr[i]= func(arr[i]);
    }
    return newArr;
}
console.log(mapArray([2, 5, 8], function(el) { return el + 3 }));

function filterArr(arr,func){
    let filtArr = [];
    for(let i = 0; i<arr.length; i++){
        if (func(arr[i])){
            filtArr.push(arr[i]);
        }
    }
    return filtArr;
}

console.log(filterArr([2, 5, 8], function(el) { return el > 3 }));

