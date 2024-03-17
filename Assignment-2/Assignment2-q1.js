function Maximum(Arr) {
    var Max = Arr[0];
    var i = 0;
    for (i = 1; i < Arr.length; i++) {
        if (Arr[i] > Max) {
            Max = Arr[i];
        }
    }
    return Max;
}
var Input = [23, 89, 6, 29, 56, 45, 77, 32];
var Max = Maximum(Input);
console.log("Maximum number is: " + Max);
