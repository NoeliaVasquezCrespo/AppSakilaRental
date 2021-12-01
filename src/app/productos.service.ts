import {Injectable} from '@angular/core';
import {Producto} from "./producto";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpService) {
  }

  public async eliminarProducto(idProducto) {
    return await this.http.delete("/producto?id=".concat(idProducto));
  }

  public async agregarProducto(producto: Producto) {
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
