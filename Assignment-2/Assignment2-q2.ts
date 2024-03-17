
function Summation(Arr: number[]) : number{
    var Addition: number = 0;
    var i: number = 0;
    for (i = 0; i < Arr.length; i++){
        Addition = Addition +  Arr[i];       
    }
    return Addition;
}

var Numbers: number[] = [23, 6, 7, 4, 5, 7];

var Result: number = 0;
Result = Summation(Numbers);
console.log("Additon is: " + Result);
