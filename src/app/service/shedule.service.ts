import { Injectable } from '@angular/core';
import { CourseData } from '../model/course-data';

@Injectable({
  providedIn: 'root'
})
export class SheduleService {

  //Create an array from coursedata.
  private courses:CourseData[]=[];

  //Receiving list
  setCourses(courses: CourseData[]) {
    this.courses=courses;
  }
  //Retrieves the current list of course data.
  getCourses():CourseData[] {
    return this.courses;
  }
  
}
