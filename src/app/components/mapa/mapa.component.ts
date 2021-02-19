import { Component, OnInit, ViewChild } from '@angular/core';
import { Propiedad, Location } from 'src/app/interfaces/interfaces';
import { PropiedadesService } from 'src/app/services/propiedades.service';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {

  coords: string;
  map: any;
  location: Location;
  @ViewChild('mapa', { static: true }) mapa: any;

  constructor(private propiedadesService: PropiedadesService) { }

  ngOnInit() {

    //escucha selectPropiedad
    this.propiedadesService.selectPropiedad.subscribe((propiedad: Propiedad) => {
      // seteo location
      this.location = propiedad.location;

      //creacion de mapa
      if (this.location) {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYXJnM25pNSIsImEiOiJja2ZtNHJ6Z2oxZmZzMnJsZHZmYTFteTAxIn0.1rKJFNCPQSYtWT0epv0euQ';
        this.map = new mapboxgl.Map({
          container: this.mapa.nativeElement,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [this.location.longitude, this.location.latitude],
          zoom: 15,
          interactive: false
        });
        // control para pantalla completa
        this.map.addControl(new mapboxgl.FullscreenControl());
        // marcador en el mapa
        const marker = new mapboxgl.Marker().setLngLat([this.location.longitude, this.location.latitude]).addTo(this.map);
        setTimeout(() => {
          this.map.resize();
        }, 1500);
      }
    })
  }
  resize(){    
    this.map.resize();
  }
}
