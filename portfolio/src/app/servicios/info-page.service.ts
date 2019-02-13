import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IInfoPage} from '../interfaces/i-info-page';
import {IEquipo} from '../interfaces/i-equipo';
@Injectable({
  providedIn: 'root'
})
export class InfoPageService {
  info: IInfoPage = {};
  equipo: IEquipo = {};
  cargada = false;
  constructor(private http: HttpClient) {
    //console.log('Info: página cargada...');
    //cogemos json

    this.cargaInfo();
    this.cargaInfoEquipo();

  }
  private cargaInfo(){
    this.http.get('assets/data/data-page.json').subscribe((resp: IInfoPage) => {
      //console.log(resp);
      //console.log(resp.facebook);
      this.cargada = true;
      this.info = resp;
      console.log(this.info);
    });
  }
  private cargaInfoEquipo() {
    this.http.get('https://portfolio-9eeb8.firebaseio.com/equipo.json').subscribe((resp2: IEquipo) => {
      this.cargada = true;
      this.equipo = resp2;
    });
  }
}