import { Component } from '@angular/core';
import { InfoPageService } from './servicios/info-page.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TravelAntartica';
  constructor(public pepe : InfoPageService){

}