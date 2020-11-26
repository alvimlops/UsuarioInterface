import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html' 
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home' },
    {
      label: 'Cadastros', icon: 'pi pi-fw pi-user-plus',
      items: [
        { label: 'Usuario', icon: 'pi pi-fw pi-plus', routerLink: 'usuario-criar' },
      ]
    },
    {
      label: 'Procurar', icon: 'pi pi-fw pi-users',
      items: [
        { label: 'Usuarios', icon: 'pi pi-fw pi-user', routerLink: 'usuario-listar' },
       ]
     }
  ];
}

}
