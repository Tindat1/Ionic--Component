import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.page.html',
  styleUrls: ['./botones.page.scss'],
})
export class BotonesPage implements OnInit {

  favorito: boolean = false;
  star: boolean = false;

  constructor() { }

  ngOnInit() {
  };

  onClickFavorito() {
    this.favorito = !this.favorito
  }

  onClickStar() {
    this.star = !this.star
  }

}
