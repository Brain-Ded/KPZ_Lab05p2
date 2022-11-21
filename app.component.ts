import { Component } from '@angular/core';
import {Routes, RouterModule, ROUTES} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `<div>
    <h1>Routes</h1>
    <nav>
      <a routerLink="">Home</a>
      <a routerLink="/student">Student</a>
      <a routerLink="/teacher">Teacher</a>
    </nav>
    <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KPZLab05p2';
}
