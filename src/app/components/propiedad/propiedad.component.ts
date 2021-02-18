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
  @Input() propiedad: Propiedad;

  constructor(private propiedadesService: PropiedadesService) {
    if (this.propiedad == undefined) {
      this.propiedad = { title: "" };
    }
  }
  ngOnInit(): void {
    this.propiedadesService.selectPropiedad.subscribe((propiedad: Propiedad) => {
      console.log(propiedad);
      this.propiedad = propiedad;
    })
  }

  nextPropiedad() {
    this.propiedadesService.nextPropiedad();
  }

}
