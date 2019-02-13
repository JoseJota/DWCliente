import { Component, OnInit } from '@angular/core';
import { InfoPageService } from 'src/app/servicios/info-page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public infoPageService: InfoPageService) { }

  ngOnInit() {
  }

}
