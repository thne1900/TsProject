import { Component } from '@angular/core';
import { SheduleService } from '../service/shedule.service';
import { CourseData } from '../model/course-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {

  //Creates an array
  scheduledCourses:CourseData[]=[];

  constructor(private SheduleService: SheduleService) {}

  //When the component runs, get output to the array and managed in localstorage.
  ngOnInit(){
    this.scheduledCourses=this.SheduleService.getCourses();

    const storeData=localStorage.getItem("course");
    if(storeData){
    try{
      this.scheduledCourses=JSON.parse(storeData);
    }catch(error){
      this.scheduledCourses=[];
        console.error("Fel vid hanteringen av LocalStorage",error);
    }
    }else {
      this.scheduledCourses=[];
    }
    
  }

//Function to access the link to the syllabus.
WayToSyllabus(url:string) {
  window.open(url,"_blank");
  }

  //Function to toggle the favourite-star, and saves changes to localStorage.
  toggleFav(course:CourseData) {
    course.favourite=!course.favourite;
    
    this.savedLocalStorage();

    this.SheduleService.setCourses(this.scheduledCourses);
    
  }

  //Function to delete course, and saves the changes.
  deleteCourse(course:CourseData) {
    this.scheduledCourses=this.scheduledCourses.filter(obj=>obj!==course);

    //Alert textbox when a course is deleted. 
    alert(`Kursen: ${course.courseName} är borttagen från Ditt ramschema`);
    
    this.savedLocalStorage();

    this.SheduleService.setCourses(this.scheduledCourses);
    
  }

  private savedLocalStorage() {
    localStorage.setItem("course", JSON.stringify(this.scheduledCourses));
  }

  //Function to display current course points in the list.*/
   totalPoints():number {
    return this.scheduledCourses.reduce((sum, course)=>sum+course.points,0);
  }

  //Function to delete all courses in the list.
  deleteList(){
    this.scheduledCourses=[];

    this.savedLocalStorage();

    this.SheduleService.setCourses(this.scheduledCourses);
  }

}
