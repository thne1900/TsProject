import { Component } from '@angular/core';
import { CoursesService } from '../service/courses.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseData } from '../model/course-data';
//import { Router } from '@angular/router';
import { SheduleService } from '../service/shedule.service';

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
chosenSub:string=""; // The selected subject being filtered
searchText:string=""; // The search string
sortTo:string="courseCode"; //Current sorting.
columnOrder:boolean=true;//Witch sorting order.
sortedCourses:CourseData[]=[];// The sorted courselist
addedCourses:CourseData[]=[];//Added courses --> schedule. 

constructor(private CoursesService: CoursesService, /*private router: Router*/ private SheduleService: SheduleService){}

//Retrieves the course when the component runs.
ngOnInit(){
  this.CoursesService.getCourses().subscribe((data)=>{
    this.courseList=data;

//Creates a list of subjects.
    this.subjects=Array.from(new Set(this.courseList.map(course=>course.subject)));
   
    this.sortingCourses();
  });
}

// Function that creates list after filtering.
filteredCourses():CourseData[] {
  let filteredObj=this.sortedCourses.slice();
 
  //Filter by the selected subject.
  if(this.chosenSub) {
    filteredObj=filteredObj.filter(course=>course.subject===this.chosenSub);
  }
  
  //Filters from the search text (course name and course code)
if(this.searchText && this.searchText.trim()!=="") {
  
  const object=this.searchText.toLowerCase();
  filteredObj=filteredObj.filter(course=>course.courseName.toLowerCase().includes(object) ||
  course.courseCode.toLowerCase().includes(object)
);
}
return filteredObj;
  }

//Function to sorting the columns.
sortingCourses(){
this.sortedCourses=this.courseList.slice();
this.sortedCourses.sort((a,b)=>{
  let aValue=a[this.sortTo as keyof CourseData];
  let bValue=b[this.sortTo as keyof CourseData];

  if(typeof aValue==="string" && typeof bValue==="string"){
    aValue=aValue.toLowerCase();
    bValue=bValue.toLowerCase();
  }

  if(aValue<bValue) return this.columnOrder?-1:1;
  if(aValue>bValue) return this.columnOrder?1:-1;
  return 0;
});

}

//Function that sorts alternately on "click.
 sortSwitch(column:string) {
    if(this.sortTo===column){
      this.columnOrder=!this.columnOrder;
    }else{
      this.sortTo=column;
      this.columnOrder=true;
    }
    
    this.sortingCourses();
    }

//Function that, when clicking on "syllabus", opens it on a new page.
WayToSyllabus(url:string) {
  window.open(url,"_blank");
}

//Function to add new course.
AddCourse(course:CourseData) {
  if(!this.addedCourses.includes(course)){
    this.addedCourses.push(course);

    this.SheduleService.setCourses(this.addedCourses);

  }
//Adds course to schedule page.
  this.SheduleService.setCourses(this.addedCourses);
  //this.router.navigate(['/schedule']);
}
//Function to disply current number.
currentDisplayedCourses():number{
  return this.filteredCourses().length;
}

courseAdded(course:CourseData):boolean{
  return this.addedCourses.includes(course);
}
}