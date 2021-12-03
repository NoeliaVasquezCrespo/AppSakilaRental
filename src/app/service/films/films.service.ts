import {Injectable} from '@angular/core';
import { Film } from '../film/film';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpService) {
  }

  public async eliminarProducto(idProducto) {
    return await this.http.delete("/producto?id=".concat(idProducto));
  }

  public async agregarProducto(producto: Film) {
    return await this.http.post("/producto", producto);
  }

  /*
  El formdata debe tener el id del producto
   */
  
  public async obtenerProductos() {
    return await this.http.get("/productos");
  }

 

  public async obtenerProductoPorId(idProducto) {
    return await this.http.get("/producto?id=".concat(idProducto));
  }
}
