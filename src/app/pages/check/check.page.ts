import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      name: 'primary',
      selected: false,
    },
    {
      name: 'secondary',
      selected: true,
    },
    {
      name: 'tertiary',
      selected: false,
    },
    {
      name: 'success',
      selected: true,
    },
    {
      name: 'danger',
      selected: true,
    },
    {
      name: 'warning',
      selected: false,
    },
  ]


  constructor() { }

  ngOnInit() {
  }

  onClick( item: any ){
    console.log(item);
  }

  VerData(){
    console.log(this.data)
  }

}
