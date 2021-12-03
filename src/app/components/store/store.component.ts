import {Component, OnInit} from '@angular/core';
import { FilmsService } from 'src/app/service/films/films.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public productos = [];

  constructor(private filmsService: FilmsService) {
  }

  async ngOnInit() {
    this.productos = await this.filmsService.obtenerProductos();
  }


}
