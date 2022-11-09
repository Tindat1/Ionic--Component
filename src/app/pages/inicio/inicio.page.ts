import { Component, OnInit } from '@angular/core';

interface Componente {
  icon:string;
  name:string;
  redirectTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'terminal-outline',
      name: 'Action sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar',
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Botones',
      redirectTo: '/botones',
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card',
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Check',
      redirectTo: '/check',
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirectTo: '/date-time',
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirectTo: '/fab',
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid',
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite-Scroll',
      redirectTo: '/infinite',
    },
    {
      icon: 'hammer-outline',
      name: 'Input',
      redirectTo: '/input',
    },
    {
      icon: 'list-outline',
      name: 'List - Sliding',
      redirectTo: '/list',
    },


  ];

  constructor() { }

  ngOnInit() {
  }

}
