
class Circle 
{
    public Radius: number;
    public PI: number;

    constructor(A: number, B: number = 3.14)
    {
        this.Radius = A;
        this.PI = B;
    }

    Area(): number
    {
        var Ans: number = 0;
        Ans = this.PI * (this.Radius * this.Radius);
        return Ans;
    }
}

var obj1 = new Circle(23);
var obj2 = new Circle(10);
var Result: number = 0;

Result = obj1.Area();
console.log(Result);

Result = obj2.Area();
console.log(Result);

