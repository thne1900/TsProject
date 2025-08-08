import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseData } from '../model/course-data';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private url:string="public/miun_courses.json";

  constructor(private http: HttpClient) { }

  getCourses(): Observable<CourseData[]> {
    return this.http.get<CourseData[]>(this.url);
  }
}
