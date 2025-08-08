import { Component } from '@angular/core';
import { CoursesService } from '../service/courses.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseData } from '../model/course-data';

@Component({
  selector: 'app-courselist',
  imports: [CommonModule, FormsModule],
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.css'
})
export class CourselistComponent {
courseList: CourseData[]=[];

constructor(private CoursesService: CoursesService){}

ngOnInit(){
  this.CoursesService.getCourses().subscribe((data)=>{
    this.courseList=data;
  });
}
}
