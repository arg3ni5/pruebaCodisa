import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { PropiedadComponent } from './propiedad/propiedad.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MapaComponent } from './mapa/mapa.component';

@NgModule({
  declarations: [
    PropiedadComponent,
    NavbarComponent,
    CarouselComponent,
    MapaComponent
  ],
  exports: [PropiedadComponent, NavbarComponent],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class ComponentsModule { }
