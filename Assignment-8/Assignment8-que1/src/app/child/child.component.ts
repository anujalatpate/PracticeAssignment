import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  public Value: any;
  public AcceptData(value : any)
  {
    console.log("Entered amount is: " +value);
    this.Value = value;
  }

}
