import {
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css'],
})
export class CicloDeVidaComponent
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit
{
  //No es un evento del ciclo de vida
  constructor() {}

  @Input()
  titulo: any;

  ngOnDestroy(): void {
    console.log('on destroy');
  }
  ngDoCheck(): void {
    console.log('on docheck');
  }
  ngAfterViewInit(): void {
    console.log('on afterviewinit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
  }
  ngOnInit(): void {
    console.log('on init');
  }
}
