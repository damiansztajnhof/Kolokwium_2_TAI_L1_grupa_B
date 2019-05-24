import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsDSComponent } from './orders-details-ds.component';

describe('OrdersDetailsDSComponent', () => {
  let component: OrdersDetailsDSComponent;
  let fixture: ComponentFixture<OrdersDetailsDSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDetailsDSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
