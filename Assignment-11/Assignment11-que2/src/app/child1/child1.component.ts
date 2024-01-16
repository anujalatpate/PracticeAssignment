import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { checkPrime } from 'crypto';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers: [NumberService]
})
export class Child1Component {
  primeResult: boolean;
  Result: string | undefined;

  constructor(private obj1: NumberService){
    // console.log(this.obj1.ChkPrime(17));      
    this.primeResult = obj1.ChkPrime(17);
    if(this.primeResult == true){
      this.Result = `17 is Prime Number`
    } else {
      this.Result = `17 is Not a Prime Number`
    }   
  }

}
