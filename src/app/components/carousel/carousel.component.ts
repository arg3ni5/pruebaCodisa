import { Component, OnInit } from '@angular/core';
import { Propiedad } from 'src/app/interfaces/interfaces';
import { PropiedadesService } from '../../services/propiedades.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  id: number = 0; // id de la propiedad
  imagenes: string[];

  constructor(private propiedadesService: PropiedadesService) { }

  ngOnInit(): void {
    this.propiedadesService.selectPropiedad.subscribe((propiedad: Propiedad) => {
      console.log(propiedad);
      if (this.id != undefined) {
        this.id = propiedad.id;
        this.propiedadesService.getImgsPropiedades(this.id).subscribe(data=>{
          this.imagenes = data['images'];
        });
      }
    })
  }

}
