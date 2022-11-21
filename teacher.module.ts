import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeacherComponent} from "./teacher.component";
import {Routes, RouterModule, ROUTES} from "@angular/router";

const appRoutes: Routes = [
  {path: '', component: TeacherComponent}
]

@NgModule({
  declarations: [TeacherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class TeacherModule { }
