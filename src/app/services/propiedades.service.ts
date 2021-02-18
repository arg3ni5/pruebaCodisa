import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Propiedad } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {
  selectPropiedad = new EventEmitter<Propiedad>();
  propiedades: Propiedad[]; // lista de propiedades
  posPropiedad: number = 0; // Posicion de propiedad mostrada

  constructor(private http: HttpClient) { }

  getPropiedades() {
    return this.http.get<Propiedad[]>('https://rtfe-test-default-rtdb.firebaseio.com/properties.json');
  }
  getImgsPropiedades(id: number) {
    return this.http.get<any>(`https://rtfe-test-default-rtdb.firebaseio.com/property_images/${id}.json`);
  }
  setPropiedad(propiedad: Propiedad, posPropiedad: number) {
    this.posPropiedad = posPropiedad;
    this.selectPropiedad.emit(propiedad);
  }
  nextPropiedad() {
    this.getPropiedades().subscribe((data: Propiedad[]) => {

      console.log(data);
      let arr = [];  
      Object.keys(data).map(function(key){  
          arr.push({[key]:data[key]})  
          return arr;  
      });        

      if (this.posPropiedad == data.length - 1) {
        this.posPropiedad = 0;
      }
      else {
        this.posPropiedad++;
      }

      let nuevaPropiedad = data[this.posPropiedad];
      if (!nuevaPropiedad || (nuevaPropiedad && !nuevaPropiedad.id)) {
        this.posPropiedad = 0;
        nuevaPropiedad = data[this.posPropiedad];
      }
      // seteo e emision de propiedad
      this.setPropiedad(nuevaPropiedad, this.posPropiedad);
    })

  }
}
