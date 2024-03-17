function ChkPrime(Num) {
    if (Num <= 1) {
        return false;
    }
    for (Num = 2; Num <= Math.sqrt(Num); Num++) {
        if (Num % Num === 0) {
            return false;
        }
    }
    return true;
}
var Input = 11;
var Ans = ChkPrime(Input);
console.log("It is a Prime number");
