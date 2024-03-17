function Area(Input: number): number
{
    var Result: number = 0;
    Result = 3.14 * (Input * Input);
    return Result;
}

var Input: number = 5;
var Ans: number = 0;
Ans = Area(Input);
console.log("Area of circle is: " + Ans);

