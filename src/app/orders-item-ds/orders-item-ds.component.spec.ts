import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemDSComponent } from './orders-item-ds.component';

describe('OrdersItemDSComponent', () => {
  let component: OrdersItemDSComponent;
  let fixture: ComponentFixture<OrdersItemDSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersItemDSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
