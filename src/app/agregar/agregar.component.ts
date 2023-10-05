import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  cita: any = {
    cedula: '',
    nombre: '',
    fecha: '',
    hora: '',
    observaciones: ''
  };

  constructor(private http: HttpClient) { }

  guardarCita() {
    this.http.post('https://app.gosummus.com/testing/api/cita', this.cita)
      .subscribe(response => {
        // Manejar la respuesta de la API aquí
        console.log('Cita guardada:', response);
        // Puedes redirigir al usuario o realizar otras acciones necesarias
      });
  }
}
