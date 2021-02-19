import { Component, Input, OnInit } from '@angular/core';
import { Propiedad } from 'src/app/interfaces/interfaces';
import { PropiedadesService } from '../../services/propiedades.service';

@Component({
  selector: 'app-propiedad',
  templateUrl: './propiedad.component.html',
  styleUrls: ['./propiedad.component.css']
})
export class PropiedadComponent implements OnInit {


  // Objeto seleccionado
  propiedad: Propiedad;
  tab = 'fotos';

  constructor(private propiedadesService: PropiedadesService) {
    if (this.propiedad == undefined) {
      this.propiedad = { title: "" };
    }
  }
  ngOnInit(): void {
    this.propiedadesService.selectPropiedad.subscribe((propiedad: Propiedad) => {
      this.propiedad = propiedad;
    })
  }

  nextPropiedad() {
    this.propiedadesService.nextPropiedad();
  }

}
