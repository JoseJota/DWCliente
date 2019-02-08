import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
 title="Personas";
  people: any[] = [{
    name:"Antoine",
    country:"France"},{
      name:"Raul",
      country:"Spain"
    }];
  getColor(country){
    switch (country){
      case 'Spain':
      return 'red';
      case 'France':
      return 'blue';
      default:
      return 'white';
    }
  }

  getClass(country){
    switch (country){
      case 'Spain':
      return 'bg-success';
      case 'France':
      return 'bg-warning';
      default:
      return 'bg-danger';
    }
  }

  showPais = true;
  togglePais() {   this.showPais = !this.showPais;  }

  constructor() { }

  ngOnInit() {

  }

}
