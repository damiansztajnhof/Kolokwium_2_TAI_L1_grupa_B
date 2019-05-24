import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDSComponent } from './orders-ds.component';

describe('OrdersDSComponent', () => {
  let component: OrdersDSComponent;
  let fixture: ComponentFixture<OrdersDSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
