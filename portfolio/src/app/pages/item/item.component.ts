import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  constructor(private route: ActivatedRoute, public Productosservice) {}

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      this.Productosservice
        .getProductos(parametros["id"])
        .subscribe(producto:IProducts) =>{
          this.producto = producto,
          this.id = parametros["id"];

        }
    });
  }
}
