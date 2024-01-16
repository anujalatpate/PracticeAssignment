import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  capitalResult: number;
  constructor(private obj2: StringService){
    // console.log(this.obj2.CapitalCount('Hello World'));
    this.capitalResult = obj2.CapitalCount('Hello World');
    
  }

}
