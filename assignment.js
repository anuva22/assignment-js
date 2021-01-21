
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

// 2. budgetCalculator
function budgetCalculator(totalproduct){
    // here watch = 50 dolar.
    var quantity1 = totalproduct * 50; 
    //here phone = 100 dolar.
    var quantity2 = totalproduct * 100;
    //here laptop = 500 dolar.
    var quantity3 = totalproduct * 500;
    var totalnum = quantity1 + quantity2 + quantity3;
    return totalnum;
}
var first = budgetCalculator(1);
var second = budgetCalculator(1);
var third = budgetCalculator(1);
var total = first + second + third;
console.log(total);

// 3. hotelCost
// 1-10 days 100 taka
// 11-20 daya 80 taka
// 21- so on 50 taka
function hotelCost(days){
    var taka = 0;
    if (days <=10){
        taka = days * 100;
    }else if (days <=20){
        var firstcombo = 10 * 100;
        var nextdays = days - 10;
        var secondcombo = nextdays * 80;
        days = firstcombo + secondcombo;
    }else{
        var firstcombo = 10 * 100;
        var secondcombo = 10 * 80;
        var nextdays = days - 20;
        var thirdcombo = nextdays * 50;
        taka = firstcombo + secondcombo + thirdcombo;
    }
    return taka;
}
var total = hotelCost(27);
console.log(total);
