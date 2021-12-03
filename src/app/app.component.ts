import {Component, OnInit} from '@angular/core';
import { CarritoService } from './service/carrito/carrito.service';
import { DataSharingService } from './service/data-sharing/data-sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-commerce-angular-node';
  public productos = [];

  constructor(private carritoService: CarritoService, private dataSharingService: DataSharingService) {
    // Comunicación entre componentes
    this.dataSharingService.currentMessage.subscribe(mensaje => {
      if (mensaje == "car_updated") {
        this.refrescarCarrito();
      }
    })
  }

  public async refrescarCarrito() {
    this.productos = await this.carritoService.obtenerProductos();
  }

  public total() {
  
    let total = 0;
    this.productos.forEach(p => total += p.rental_rate);
    return total;
  }

  ngOnInit(): void {
    this.refrescarCarrito();
  }


}
