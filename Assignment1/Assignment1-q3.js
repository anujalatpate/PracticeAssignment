function DisplayFactors(Num) {
    for (i = 1; i < Num; i++) {
        if (Num % i === 0) {
            console.log(i);
        }
    }
}
var i = 20;
DisplayFactors(i);
