import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css'],
})
export class CrearGeneroComponent {
  form: any;
  constructor(private router: Router, private formBuilder: FormBuilder) {
    form: FormGroup
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre : ''
    })
  }
  guardarCambio() {
    //..guardar los cambios
    this.router.navigate(['/generos'])
  }
}
