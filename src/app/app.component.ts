import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from './services/data.service';
import { Componente } from './interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes: Observable<Componente[]>;

  constructor( private menuCtrl: MenuController, 
               private DataService: DataService) { }

  ngOnInit() {
    this.componentes = this.DataService.getMenuOpts();
  }
}


