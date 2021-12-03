import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { CarritoService } from 'src/app/service/carrito/carrito.service';
import { DataSharingService } from 'src/app/service/data-sharing/data-sharing.service';
import { FilmsService } from 'src/app/service/films/films.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public film = {
    film_id: 0,
    title: "",
    description: "",
    release_year:"", 
    rental_duration:"",
    rental_rate: "",
    length:"",
    replacement_cost:"",
    rating:"",
    special_features:"",
  };
  public indiceSeleccionado = 0;
  public yaExiste: boolean;

  constructor(private carritoService: CarritoService, private filmsService: FilmsService, private activatedRoute: ActivatedRoute, private dataSharingService: DataSharingService) {

  }

  
  public async quitarDelCarrito() {
    const {film_id} = this.film;
    const respuesta = await this.carritoService.quitarProducto(film_id);
    console.log({respuesta})
    this.refrescarEstado();
  }

  public async agregarAlCarrito() {
    const {film_id} = this.film;
    const respuesta = await this.carritoService.agregarAlCarrito(film_id);
    console.log({respuesta})
    this.refrescarEstado();
  }

  async refrescarEstado() {
    const film_id = this.film.film_id;
    this.yaExiste = await this.carritoService.existeEnCarrito(film_id);
    // Comunicación entre componentes
    this.dataSharingService.changeMessage("car_updated");
  }

  
  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    this.film = await this.filmsService.obtenerProductoPorId(id); 
    this.refrescarEstado();
  }

}
