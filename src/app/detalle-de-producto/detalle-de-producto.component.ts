import {Component, OnInit} from '@angular/core';
import {ProductosService} from "../productos.service";
import {ActivatedRoute} from "@angular/router";
import {Producto} from "../producto";
import {CarritoService} from "../carrito.service";
import {DataSharingService} from "../data-sharing.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-detalle-de-producto',
  templateUrl: './detalle-de-producto.component.html',
  styleUrls: ['./detalle-de-producto.component.css']
})
export class DetalleDeProductoComponent implements OnInit {
  public producto = {
    id: 0,
    title: "",
    description: "",
    rental_rate: "",
  };
  public indiceSeleccionado = 0;
  public yaExiste: boolean;

  constructor(private carritoService: CarritoService, private productosService: ProductosService, private activatedRoute: ActivatedRoute, private dataSharingService: DataSharingService) {

  }

  
  public async quitarDelCarrito() {
    const {id} = this.producto;
    const respuesta = await this.carritoService.quitarProducto(id);
    console.log({respuesta})
    this.refrescarEstado();
  }

  public async agregarAlCarrito() {
    const {id} = this.producto;
    const respuesta = await this.carritoService.agregarAlCarrito(id);
    console.log({respuesta})
    this.refrescarEstado();
  }

  async refrescarEstado() {
    const id = this.producto.id;
    this.yaExiste = await this.carritoService.existeEnCarrito(id);
    // Comunicación entre componentes
    this.dataSharingService.changeMessage("car_updated");
  }

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    this.producto = await this.productosService.obtenerProductoPorId(id); 
    this.refrescarEstado();
  }

}
