import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CourselistComponent } from './courselist/courselist.component';
import { ScheduleComponent } from './schedule/schedule.component';


export const routes: Routes = [
{path: "home", component: HomeComponent},
{path: "courselist", component: CourselistComponent},
{path: "schedule", component: ScheduleComponent},
{path: "", redirectTo: "/home", pathMatch: "full"},
{path: "404", component: NotfoundComponent},
{path: "**", component: NotfoundComponent}

];
