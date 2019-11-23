import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillAreaComponent } from './bill-area.component';

describe('BillAreaComponent', () => {
  let component: BillAreaComponent;
  let fixture: ComponentFixture<BillAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
