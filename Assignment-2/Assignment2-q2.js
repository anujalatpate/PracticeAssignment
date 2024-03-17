function Summation(Arr) {
    var Addition = 0;
    var i = 0;
    for (i = 0; i < Arr.length; i++) {
        Addition = Addition + Arr[i];
    }
    return Addition;
}
var Numbers = [23, 6, 7, 4, 5, 7];
var Result = 0;
Result = Summation(Numbers);
console.log("Additon is: " + Result);
