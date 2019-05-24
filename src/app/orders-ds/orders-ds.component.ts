import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'orders-ds',
  templateUrl: './orders-ds.component.html',
  styleUrls: ['./orders-ds.component.css']
})
export class OrdersDSComponent implements OnInit {
  public items$: any;
  
  constructor(private service: DataService) {
  }


  ngOnInit() {
    this.getAll();
   }
   getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
  });


}
}
