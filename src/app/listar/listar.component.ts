import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{
  citas: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.obtenerCitas();
  }

  obtenerCitas() {
    this.http.get<any>('https://app.gosummus.com/testing/api/citas')
      .subscribe(data => {
        this.citas = data.citas;
      });
  }

  editarCita(cedula: string) {
    this.router.navigate(['/editar', cedula]);
  }
}
