import { Routes } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';

export const routes: Routes = [
    {path: 'demo1', component: Demo1Component},
    {path: 'demo2', component: Demo2Component},
];
