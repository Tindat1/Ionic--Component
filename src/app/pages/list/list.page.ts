import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;
  @ViewChild(IonList) ionList: IonList;


  favoritoB: boolean = false;
  shareB: boolean = false;
  trashB: boolean = false;

  constructor( private DataService: DataService) { }

  ngOnInit() {

    this.usuarios = this.DataService.getUsuarios()
  }

  favorite(user: any){
    console.log('favorite',user),
    this.favoritoB = !this.favoritoB,
    this.ionList.closeSlidingItems()

  };
  share(user: any){
    console.log('shared',user),
    this.shareB = !this.shareB,
    this.ionList.closeSlidingItems()

  };
  
  delete(user: any){
    console.log('Delete',user.name),
    this.trashB = !this.trashB,
    this.ionList.closeSlidingItems()

  } 
}
