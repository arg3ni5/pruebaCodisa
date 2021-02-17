import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPropiedades(){
    return this.http.get('https://rtfe-test-default-rtdb.firebaseio.com/properties.json');
  }
}
