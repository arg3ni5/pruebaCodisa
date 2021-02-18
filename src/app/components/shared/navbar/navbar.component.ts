import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menus: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.menus = [
      {
        texto: 'En Venta',
        active: true,
        submenus: [
          { texto: 'Casas' },
          { texto: 'Apartamentos' },
          { texto: 'Oficinas' },
          { texto: 'Desarrollos nuevos' }
        ]
      },
      {
        texto: 'En Alquiler',
        submenus: [
          { texto: 'Brokers' },
          { texto: 'Dueños' }
        ]
      },
      {
        texto: 'Hipoteca',
        submenus: [
          { texto: 'Entidades financieras' },
          { texto: 'Buscar preaprobación' }
        ]
      },
      {
        texto: 'Necesito Ayuda',
        submenus: [
          { texto: 'Guías para comprar una propiedad' }
        ]
      }
    ];
  }

}
