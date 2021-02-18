import { Component, Input, OnInit } from '@angular/core';
import { Propiedad } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-propiedad',
  templateUrl: './propiedad.component.html',
  styleUrls: ['./propiedad.component.css']
})
export class PropiedadComponent implements OnInit {

  // Objeto seleccionado
  @Input() propiedad: Propiedad;

  constructor() {
    if (this.propiedad == undefined) {
      this.propiedad = { title: "" };
    }
  }
  ngOnInit(): void {
  }

}
