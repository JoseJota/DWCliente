import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { 
    //subscribe
  }

  public getProductos(id:string){
    return this.http.get(`https://portfolio-9eeb8.firebaseio.com/productos/${id}.json`)
  }
}
