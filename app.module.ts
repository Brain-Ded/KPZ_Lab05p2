import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './features/student/student.component';
import { TeacherComponent } from './features/teacher/teacher.component';

import {Routes, RouterModule, ROUTES} from "@angular/router";
import { HomeComponent } from './features/home/home.component';
import { TestComponentComponent } from './shared/components/test-component/test-component.component';
import {TestServiceService} from "./shared/services/test-service.service";
import {TestInterface} from "./shared/interfaces/test-interface";

const appRoutes: Routes = [
  {path: '',
  loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule)},
  {path: 'student',
    loadChildren: () => import("./features/student/student.module").then(m => m.StudentModule)},
  {path: 'teacher',
    loadChildren: () => import("./features/teacher/teacher.module").then(m => m.TeacherModule)}

]

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
