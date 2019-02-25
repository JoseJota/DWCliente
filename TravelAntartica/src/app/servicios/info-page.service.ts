import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

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
    this.http.get('https://travel-antartica.firebaseio.com/').subscribe((resp2: IEquipo) => {
      this.cargada = true;
      this.equipo = resp2;
    });
  }
}