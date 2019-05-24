import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'orders-details-ds',
  templateUrl: './orders-details-ds.component.html',
  styleUrls: ['./orders-details-ds.component.css']
})
export class OrdersDetailsDSComponent implements OnInit {
  image = 'https://kol2tai.herokuapp.com/api/order/items';
  text = 'Tytuł';
  
  constructor() { }

  ngOnInit() {
  }

}
