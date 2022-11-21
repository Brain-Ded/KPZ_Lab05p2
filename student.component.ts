import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {FormsModule, Form} from "@angular/forms";

@Component({
  selector: 'app-student',
  template: `
    <div align="center">
      <table style="width: 100px">
        <tr>
          <td>
            <input #iName/>
          </td>
          <td>
            <input #iSurname/>
          </td>
        </tr>
        <tr>
          <th>Name:</th>
          <th>Surname:</th>
        </tr>
        <tr *ngFor="let Student of StudentData; trackBy: trackItem">
          <td>{{Student.name}}</td>
          <td>{{Student.surname}}</td>
        </tr>
      </table>
      <button #addStudentB (click)="addStudent(iName.value, iSurname.value)">Add</button>
      <button #addStudentB (click)="deleteLastStudent()">DeleteLast</button>
    </div>
  `,
  styleUrls: ['./student.component.css']
})

export class StudentComponent{
  StudentData: Array<any> = [
    {name: 'Vlad', surname: 'Atorin'},
    {name: 'Oleg', surname: 'Sivak'},
    {name: 'Alexander', surname: 'Chernenko'},
  ];

  constructor(private changeDetection: ChangeDetectorRef) {
    console.log("Student Is Working!")
  }
  addStudent(name:string, surname:string){
    console.log("Used!")
    this.StudentData.push({name: name, surname: surname});
    console.log(this.StudentData)
  }

  deleteLastStudent(){
    console.log("Used!")
    this.StudentData.pop();
    console.log(this.StudentData)
  }

  public trackItem (index: number, student: Array<any>) {
    return student;
  }
}
