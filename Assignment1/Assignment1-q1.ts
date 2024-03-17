function Maximum(Num1: number, Num2: number, Num3: number): void{
    if (Num1 > Num2) {
        console.log("Maximum number is: " + Num1);        
    }else if (Num2 > Num3) {
        console.log("Maximum number is: " + Num2);        
    } else {
        console.log("Maximum number is: " + Num3);        
    }
}
var Value1: number = 23;
var Value2: number = 89;
var Value3: number = 6;

Maximum(Value1, Value2, Value3);