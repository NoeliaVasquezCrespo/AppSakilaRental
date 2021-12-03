import {Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  rutaServidor = environment.baseUrl;

  constructor() {
  }

  public async post(ruta: string, payload: any) {
    const respuestaRaw = await fetch(this.rutaServidor + ruta, {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "include",
    });
    return await respuestaRaw.json();
  }

  public async formdata(ruta: string, payload: FormData) {
    const respuesta = await fetch(this.rutaServidor + ruta, {
      body: payload,
      method: "POST",
    });
    return await respuesta.json();
  }

  async get(ruta: string) {
    // Por defecto se hace una petición GET
    const respuesta = await fetch(this.rutaServidor + ruta, {
      credentials: "include",
    });
    return await respuesta.json();
  }

  async delete(ruta: string) {
    const respuesta = await fetch(this.rutaServidor + ruta, {
      credentials: "include",
      method: "DELETE",
    });
    return await respuesta.json();
  }
}
