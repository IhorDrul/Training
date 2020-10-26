// Your code goes here
var price = prompt('Itput price');
var discount = prompt('Itput discount');
var priceWithDis;
var saved;

if((`${+price}`==='NaN') || (`${+discount}`==='NaN')){
    alert("invalid input data");
}else{
if((price>=1 && price<=9999999) && (discount>=1 && discount<=99)){
        saved=price*(discount/100);
        priceWithDis = price-saved;
alert(`price without discont: ${(+price).toFixed(2)}
discount: ${(+discount).toFixed(2)}
price with discount: ${priceWithDis.toFixed(2)}
saved: ${saved.toFixed(2)}`);
}else{
    alert('Invalid input data');
}
}