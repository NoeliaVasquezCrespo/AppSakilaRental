import {Component, OnInit} from '@angular/core';
import {CarritoService} from "../../carrito.service";
import {DataSharingService} from "../../data-sharing.service";
import {Cliente} from "../../cliente";


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  constructor(private carritoService: CarritoService, private dataSharingService: DataSharingService) {
  }

  public compraTerminada = false;
  public productos = [];
  public columnas = ['image','nombre', 'descripcion'];
  public clienteModel = new Cliente("", "");
  public valortotal;
  public valordescuento;


  public async revisarYTerminar(stepper) {
    if (!this.clienteModel.direccion) {
      return alert("Falta escribir la dirección del cliente");
    }
    if (!this.clienteModel.nombre) {
      return alert("Falta escribir el nombre del cliente");
    }
    const respuestaCompra = await this.carritoService.terminarCompra(this.clienteModel);
    console.log({respuestaCompra})


    this.compraTerminada=true;
    stepper.next();
    this.dataSharingService.changeMessage("car_updated")
  }

  public total() {
    let total = 0;
    this.productos.forEach(p => total += p.rental_rate);
    this.valortotal=total;
    return total;
  }

  public descuento() {
    let descuento = 0;
    let total =this.valortotal;
    if(total<=10){
      descuento = 0;
    }
    if (total>10 && total<=15){
      descuento = total*0.1;
      this.valordescuento=descuento;
    }
    if (total>15 && total<=20){
      descuento = total*0.15;
      this.valordescuento=descuento;
    }
    if (total>20){
      descuento = total*0.2;
      this.valordescuento=descuento;
    }

    return descuento;
  }

  public pago() {
    let pago = 0;
    let total = this.valortotal;
    let descuento = this.valordescuento;
    pago= total-descuento;
    return pago;
  }

  public porcentaje() {
    let porcentaje = 0;
    let total =this.valortotal;
    if(total<=10){
      porcentaje = 0;
    }
    if (total>10 && total<=15){
      porcentaje = 10;
    }
    if (total>15 && total<=20){
      porcentaje = 15;
    }
    if (total>20){
      porcentaje = 20;
    }

    return porcentaje;
  }
  


  public async quitar(producto) {
    await this.carritoService.quitarProducto(producto.film_id);
    await this.obtenerProductos();
    // Comunicación entre componentes
    this.dataSharingService.changeMessage("car_updated");
  }

  public async obtenerProductos() {

    this.productos = await this.carritoService.obtenerProductos();
  }

  public irAPaso2() {

  }

  async ngOnInit() {
    await this.obtenerProductos();
  }

}
