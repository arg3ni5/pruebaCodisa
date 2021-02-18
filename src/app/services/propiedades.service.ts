import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {
  
  constructor(private http: HttpClient) { }

  getPropiedades() {
    return this.http.get('https://rtfe-test-default-rtdb.firebaseio.com/properties.json');
  }
  getImgsPropiedades(id: number) {
    return this.http.get<any>(`https://rtfe-test-default-rtdb.firebaseio.com/property_images/${id}.json`);
  }
}
