import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Course } from '../model/course';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private url: string =
    'https://webbutveckling.miun.se/files/ramschema_ht23.json';
  courseList: string[] = [];

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }
}
