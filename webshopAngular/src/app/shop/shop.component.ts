import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
products = [
  {
    id:1,
    name:'A'
  },
  {
    id:2,
    name:'B'
  },
  {
    id:3,
    name:'C'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
