import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-propiedad',
  templateUrl: './propiedad.component.html',
  styleUrls: ['./propiedad.component.css']
})
export class PropiedadComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getPropiedades().subscribe((data: any) => {
      console.log(data);      
    })
  }

}
