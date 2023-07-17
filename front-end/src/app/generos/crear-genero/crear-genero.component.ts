import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css'],
})

export class CrearGeneroComponent {
  constructor(private router: Router) {}
  guardarCambio(genero: generoCreacionDTO) {
    //guardar cambios
    console.log(genero);
    this.router.navigate(['/generos']);
  }
}
