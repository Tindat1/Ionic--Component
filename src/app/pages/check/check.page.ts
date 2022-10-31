import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      color: 'primary',
      name: 'Checkbox 1',
      selected: false,
    },
    {
      color: 'secondary',
      name: 'Checkbox 2',
      selected: true,
    },
    {
      color: 'tertiary',
      name: 'Checkbox 3',
      selected: false,
    },
    {
      color: 'success',
      name: 'Checkbox 4',
      selected: true,
    },
    {
      color: 'danger',
      name: 'Checkbox 5',
      selected: true,
    },
    {
      color: 'warning',
      name: 'Checkbox 6',      
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
