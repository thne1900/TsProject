import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TsProject';

/*Picture (header)*/
imgHeader:string="images/header.jpg";

/*Variables for the footer*/
schoolName:string="Kunskapsverket";
year:number=2025;
email:string="thne1900@student.miun.se";
}