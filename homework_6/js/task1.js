var a = prompt('Itput "a"');

var b = prompt('Itput "b"');

var c = prompt('Itput "c"');

var D = b*b-4*a*c;
var x1,x2;
if(`${+a}` === 'NaN' || `${+b}` === 'NaN' || `${+c}` === 'NaN'){
    alert("invalid input data");
} else if(D>=0) {
    x1=(-b+Math.sqrt(D))/(2*a);
    x2=(-b-Math.sqrt(D))/(2*a);
    if(x1===x2){
        alert(`x=${x1}`);
    }else{
        alert(`x1=${x1} x2=${x2}`);
    }
}else if(D<0){
    alert("Discriminant<0, no solution ");
}
