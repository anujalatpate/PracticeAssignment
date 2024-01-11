import { Routes } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { HomeComponent } from './home/home.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';

export const routes: Routes = [
    {path: 'demo1', component: Demo1Component},
    {path: 'demo2', component: Demo2Component},
    {path: '', component: HomeComponent},
    {path: '**', component: InvalidPageComponent},
];
