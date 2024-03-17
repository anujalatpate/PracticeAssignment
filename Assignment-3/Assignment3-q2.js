var Circle = /** @class */ (function () {
    function Circle(A, B) {
        if (B === void 0) { B = 3.14; }
        this.Radius = A;
        this.PI = B;
    }
    Circle.prototype.Area = function () {
        var Ans = 0;
        Ans = 3.14 * (this.Radius * this.Radius);
        return Ans;
    };
    return Circle;
}());
var obj1 = new Circle(23);
var obj2 = new Circle(10);
var Result = 0;
Result = obj1.Area();
console.log(Result);
Result = obj2.Area();
console.log(Result);
