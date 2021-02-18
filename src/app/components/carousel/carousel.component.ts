import { Component, OnInit } from '@angular/core';
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
    if (this.id != undefined) {
      this.propiedadesService.getImgsPropiedades(this.id).subscribe(data=>{
        this.imagenes = data['images'];
      });
    }
  }

}
