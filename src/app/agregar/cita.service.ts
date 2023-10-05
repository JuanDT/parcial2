import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  apiUrl = 'https://app.gosummus.com/testing/api/cita';

  constructor(private http: HttpClient) { }

  crearTarjeta(cita: any) {
    return this.http.post(this.apiUrl, cita);
  }
}
