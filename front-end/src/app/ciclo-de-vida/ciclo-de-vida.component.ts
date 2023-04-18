import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { RatingComponent } from '../utilidades/rating/rating.component';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css'],
})
export class CicloDeVidaComponent
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit
{
  //No es un evento del ciclo de vida
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  @Input()
  titulo: any;

  @ViewChild(RatingComponent)
  ratingComponent: RatingComponent = new RatingComponent();

  timer: ReturnType<typeof setInterval> | undefined;

  ngOnDestroy(): void {
    console.log('on destroy');
    clearInterval(this.timer);
  }
  ngDoCheck(): void {
    console.log('on docheck');
  }
  ngAfterViewInit(): void {
    console.log('on afterviewinit');
    this.ratingComponent.ratingSeleccionado = 5;
    this.changeDetectorRef.detectChanges();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('on init');
    this.timer = setInterval(() => {
      console.log(new Date(), 1000);
    });
  }
}
