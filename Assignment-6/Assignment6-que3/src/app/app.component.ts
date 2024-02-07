import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<h1>Marvellous Infosystems</h1>
  <h1 [class] = "'success'">Marvellous Infosystems</h1>
  <input type="text"/>`,
  styles: [`.success
    {
        color: blueviolet;
    }`]
})
export class AppComponent {
  title = 'Assignment6-que3';
}
