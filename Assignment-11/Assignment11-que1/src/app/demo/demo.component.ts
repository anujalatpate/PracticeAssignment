import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers: [ArithmeticService]
})
export class DemoComponent {

  resultAdd: number;
  resultSub: number;

  constructor(private obj1: ArithmeticService){
    this.resultAdd = obj1.add(5, 3);
    this.resultSub = obj1.sub(5, 3);
  }

}
