import { Component } from '@angular/core';
import { CoursesService } from '../service/courses.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseData } from '../model/course-data';

@Component({
  selector: 'app-courselist',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.css'
})
export class CourselistComponent {

//Created variables
courseList: CourseData[]=[]; //Originallist with datainfo.
subjects:string[]=[]; //List of the subjects
choosenSub:string=""; // The selected subject being filtered
searchObject:string=""; // The search string

constructor(private CoursesService: CoursesService){}

//Retrieves the course when the component runs.
ngOnInit(){
  this.CoursesService.getCourses().subscribe((data)=>{
    this.courseList=data;

//Creates a list of subjects.
    this.subjects=Array.from(new Set(this.courseList.map(course=>course.subject)));
   
  });
}

// Function that creates list after filtering.
filteredCourses():CourseData[] {
  let filteredObj=this.courseList;

  //Filter by the selected subject.
  if(this.choosenSub) {
    filteredObj=filteredObj.filter(course=>course.subject===this.choosenSub);
  }
  
  //Filters from the search text (course name and course code)
if(this.searchObject && this.searchObject.trim()!=="") {
  
  const object=this.searchObject.toLowerCase();
  filteredObj=filteredObj.filter(course=>course.courseName.toLowerCase().includes(object) ||
  course.courseCode.toLowerCase().includes(object)
);
}

//Returns filtered list.
return filteredObj;

}
}