import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentComponent} from "./student.component";
import {Routes, RouterModule, ROUTES} from "@angular/router";
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {path: '', component: StudentComponent}
]

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule
  ]
})
export class StudentModule { }
