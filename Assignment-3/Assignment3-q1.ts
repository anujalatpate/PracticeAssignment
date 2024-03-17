
class Arithmetic 
{
    public Num1: number;
    public Num2: number;

    constructor(A: number, B: number)
    {
        this.Num1 = A;
        this.Num2 = B;
    }

    Addition(): number
    {
        var Ans : number;
        Ans = this.Num1 + this.Num2;
        return Ans;
    }

    Subtracton(): number
    {
        var Ans : number;
        Ans = this.Num1 - this.Num2;
        return Ans;
    }
    
    Multiplication(): number
    {
        var Ans : number;
        Ans = this.Num1 * this.Num2;
        return Ans;
    }
    
    Division(): number
    {
        var Ans : number;
        Ans = this.Num1 / this.Num2;
        return Ans;
    }
}

var obj1 = new Arithmetic(20, 5);
var obj2 = new Arithmetic(10, 8);

var Result: number = 0;

Result = obj1.Addition();
console.log(Result);
Result = obj1.Subtracton();
console.log(Result);
Result = obj1.Multiplication();
console.log(Result);
Result = obj1.Division();
console.log(Result);

Result = obj2.Addition();
console.log(Result);
Result = obj2.Subtracton();
console.log(Result);
Result = obj2.Multiplication();
console.log(Result);
Result = obj2.Division();
console.log(Result);

