import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { Propiedad, Location } from 'src/app/interfaces/interfaces';
import { PropiedadesService } from 'src/app/services/propiedades.service';



declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements AfterViewInit, AfterViewChecked {

  coords: string;
  map: any;
  location: Location;
  @ViewChild('mapa', { static: true }) mapa: any;

  constructor(private propiedadesService: PropiedadesService) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXJnM25pNSIsImEiOiJja2ZtNHJ6Z2oxZmZzMnJsZHZmYTFteTAxIn0.1rKJFNCPQSYtWT0epv0euQ';
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.propiedadesService.selectPropiedad.subscribe((propiedad: Propiedad) => {
      this.location = propiedad.location;
      this.buildMap();
    })
  }
  
  ngAfterViewChecked() {
    this.map.resize();
  }

  buildMap() {
    let conf = {
      container: this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.location.longitude, this.location.latitude],
      zoom: 15,
      interactive: true
    }

    this.map = new mapboxgl.Map(conf)
    this.map.on('load', () => {
      this.map.addControl(new mapboxgl.NavigationControl())
      // control para pantalla completa
      this.map.addControl(new mapboxgl.FullscreenControl());
      // marcador en el mapa
      new mapboxgl.Marker().setLngLat([this.location.longitude, this.location.latitude]).addTo(this.map);
    });
  }
  
  resize() {
    this.map.resize();
  }
}
