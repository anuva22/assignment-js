
// 1. kilometerToMeter
//1 k.m = 1000m.
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var firstMeter = kilometerToMeter(2);
console.log(firstMeter);
var nextMeter = kilometerToMeter(8);
console.log(nextMeter);

//budgetCalculator
function budgetCalculator(totalamount){
    // here watch = 50 dolar.
    var quantity1 = totalamount * 50; 
    //here phone = 100 dolar.
    var quantity2 = totalamount * 100;
    //here laptop = 500 dolar.
    var quantity3 = totalamount * 500;
    var total = quantity1 + quantity2 + quantity3;
    return total;
}
var first = budgetCalculator(2);
var second = budgetCalculator(4);
var third = budgetCalculator(6);
console.log(total);