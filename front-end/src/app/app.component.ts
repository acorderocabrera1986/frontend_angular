import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [
        {
          titulo: 'Spiderman',
          fechaLanzamiento: new Date(),
          precio: 5200.54,
        },
        {
          titulo: 'El cirujano loco',
          fechaLanzamiento: new Date(),
          precio: 52.54,
        },
        {
          titulo: 'Odisea del espacio',
          fechaLanzamiento: new Date(),
          precio: 525.54,
        },
      ];
    }, 3000);
  }
  title = 'Lo que yo quiera imprimir';
  ocultar = false;
  handleEvent(event: Event) {
    const result = (event.target as HTMLInputElement).value;
    return result;
  }
  edad = 37;
  peliculasEnCines: any;
  peliculasProximosEstrenos = [
    // {
    //   titulo: 'El maja desnudo',
    //   fechaLanzamiento: new Date(),
    //   precio: 5200.54,
    // },
    // {
    //   titulo: 'Alicia la bestia marina',
    //   fechaLanzamiento: new Date(),
    //   precio: 52.54,
    // },
    // {
    //   titulo: 'La mona pinta',
    //   fechaLanzamiento: new Date(),
    //   precio: 525.54,
    // },
  ];

  duplicarNumero(valor: number) {
    return valor * 2;
  }

  manejarRated(voto: number): void {
    alert(voto);
  }
}
