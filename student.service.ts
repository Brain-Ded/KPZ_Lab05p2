import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Student} from 'src/app/features/student'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = 'http://localhost:65389/Api/student';
  constructor(private http: HttpClient) { }
  getAllstudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url + '/AllstudentDetails');
  }
  getstudentById(studentId: string): Observable<Student> {
    return this.http.get<Student>(this.url + '/GetstudentDetailsById/' + studentId);
  }
  createstudent(student: Student): Observable<Student> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<Student>(this.url + '/InsertstudentDetails/',
      student, httpOptions);
  }
  updatestudent(student: Student): Observable<Student> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.put<Student>(this.url + '/UpdatestudentDetails/',
      student, httpOptions);
  }
  deletestudentById(studentid: string): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.delete<number>(this.url + '/DeletestudentDetails?id=' +studentid,
      httpOptions);
  }
}
