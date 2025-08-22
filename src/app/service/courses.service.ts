import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseData } from '../model/course-data';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  //Url to the json-file containing course data
  private url:string="miun_courses.json";

  constructor(private http: HttpClient) { }

  //To retrieve course data.
  getCourses(): Observable<CourseData[]> {
    return this.http.get<CourseData[]>(this.url);
  }
}
