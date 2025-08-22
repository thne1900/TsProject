import { Injectable } from '@angular/core';
import { CourseData } from '../model/course-data';

@Injectable({
  providedIn: 'root'
})
export class SheduleService {

  //Create an array from coursedata.
  private courses:CourseData[]=[];

  //Loading data from localStorage.
  constructor(){
    this.loadLocalStorage();
  }

  //For loading data from localStorage.
  private loadLocalStorage(){
    const storeData=localStorage.getItem("course");
    if(storeData) {
      try{
        this.courses=JSON.parse(storeData);
      }catch(error){
        this.courses=[];
        console.error("Fel vid inläsningen", error);
      }
      }
    }
    //Receiving list and save to localStorage.
    setCourses(courses:CourseData[]){
      this.courses=courses;

      localStorage.setItem("course", JSON.stringify(this.courses));
    }

    //Retrieves the current list of course data.
    getCourses():CourseData[]{
      return this.courses;
    }
  }

