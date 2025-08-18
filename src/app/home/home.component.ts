import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

//Pictures in the page.
imgBox2:string="images/new-year-background-791939_640.jpg";
imgBox1:string="images/wisdom-6665661_640.red.jpg";
}
