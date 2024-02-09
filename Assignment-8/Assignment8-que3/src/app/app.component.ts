import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment8-que3';
  inputText: string = '';
  textLength: number = 0;

  updateLength(){
    this.textLength = this.inputText.length;
  }
}
