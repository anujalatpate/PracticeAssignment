function DisplayFactors(Num: number): void
{
    for (i = 1; i < Num; i++){
        if (Num % i ===0){
            console.log(i);
            
        }
    }
}

var i : number = 20;
DisplayFactors(i);