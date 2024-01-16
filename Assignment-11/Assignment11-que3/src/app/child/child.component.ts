import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers: [NumberService, StringService]
})
export class ChildComponent {
  primeResult: boolean;
  Result: string | undefined;
  capitalResult: number;

  constructor(private obj1: NumberService, private obj2: StringService){
    // console.log(this.obj1.ChkPrime(17));      
    this.primeResult = obj1.ChkPrime(17);
    if(this.primeResult == true){
      this.Result = `17 is Prime Number`
    } else {
      this.Result = `17 is Not a Prime Number`
    }   

    // console.log(this.obj2.CapitalCount('Hello World'));
    this.capitalResult = obj2.CapitalCount('Hello World');
  }

}
