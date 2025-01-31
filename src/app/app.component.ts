import { Component, OnInit } from '@angular/core';
import { Propiedad } from './interfaces/interfaces';
import { PropiedadesService } from './services/propiedades.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pruebaCodisa';

  propiedades: Propiedad[];
  propiedad: Propiedad; // propiedad a mostrar
  posPropiedad: number = 0; // Posicion de propiedad mostrada

  constructor(private propiedadesService: PropiedadesService) {
    this.propiedad = { title: "" };
  }

  ngOnInit(): void {
    this.propiedadesService.getPropiedades().subscribe((data: any) => {
      this.propiedades = data;
      this.propiedadesService.setPropiedad(this.propiedades[0], this.posPropiedad);
    })
  }
}
