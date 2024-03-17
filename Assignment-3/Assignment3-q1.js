var Arithmetic = /** @class */ (function () {
    function Arithmetic(A, B) {
        this.Num1 = A;
        this.Num2 = B;
    }
    Arithmetic.prototype.Addition = function () {
        var Ans;
        Ans = this.Num1 + this.Num2;
        return Ans;
    };
    Arithmetic.prototype.Subtracton = function () {
        var Ans;
        Ans = this.Num1 - this.Num2;
        return Ans;
    };
    Arithmetic.prototype.Multiplication = function () {
        var Ans;
        Ans = this.Num1 * this.Num2;
        return Ans;
    };
    Arithmetic.prototype.Division = function () {
        var Ans;
        Ans = this.Num1 / this.Num2;
        return Ans;
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(20, 5);
var obj2 = new Arithmetic(10, 8);
var Result = 0;
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
