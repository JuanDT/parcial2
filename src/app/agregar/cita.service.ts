import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  apiUrl = 'https://app.gosummus.com/testing/api/tarjeta';

  constructor(private http: HttpClient) { }

  crearTarjeta(tarjeta: any) {
    return this.http.post(this.apiUrl, tarjeta);
  }
}
