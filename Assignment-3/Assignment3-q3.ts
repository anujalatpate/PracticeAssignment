

class Circle 
{
    public Radius: number;
    public PI: number;

    constructor(A: number, B: number = 3.14)
    {
        this.Radius = A;
        this.PI = B;
    }
}
    class CircleX extends Circle {
        Circumference(): number
        {
            var Ans: number = 0;
            Ans = 2 * this.PI * this.Radius;
            return Ans;
        }
    }

var obj1 = new CircleX(23);
var obj2 = new CircleX(10);
var Result: number = 0;

Result = obj1.Circumference();
console.log(Result);

Result = obj2.Circumference();
console.log(Result);

