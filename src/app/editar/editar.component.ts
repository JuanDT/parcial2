import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-cita',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  cedulaCita!: string;
  cita: any = {
    cedula: '',
    nombre: '',
    fecha: '',
    hora: '',
    observaciones: ''
  };

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.cedulaCita = this.route.snapshot.params['cedula'];
    this.obtenerCita();
  }

  obtenerCita() {
    this.http.get<any>('https://app.gosummus.com/testing/api/cita/' + this.cedulaCita)
      .subscribe(data => {
        this.cita = data;
      });
  }

  actualizarCita() {
    this.http.put('https://app.gosummus.com/testing/api/cita/' + this.cedulaCita, this.cita)
      .subscribe(response => {
        console.log('Cita actualizada:', response);
        this.router.navigate(['/listar-citas']);
      });
  }
}
