import { Component } from '@angular/core';
import { SheduleService } from '../service/shedule.service';
import { CourseData } from '../model/course-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {

  //Creates an array
  scheduledCourses:CourseData[]=[];

  constructor(private SheduleService: SheduleService) {}

  //When the component runs, the method is called to get output to the array.
  ngOnInit(){
    this.scheduledCourses=this.SheduleService.getCourses();
  }

//Function to access the link to the syllabus.
WayToSyllabus(url:string) {
  window.open(url,"_blank");
  }
}
