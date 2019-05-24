import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orders-item-ds',
  templateUrl: './orders-item-ds.component.html',
  styleUrls: ['./orders-item-ds.component.css']
})
export class OrdersItemDSComponent implements OnInit {
  @Input() image: string;
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
