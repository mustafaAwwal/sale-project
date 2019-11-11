import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryOutletComponent } from './secondary-outlet.component';

describe('SecondaryOutletComponent', () => {
  let component: SecondaryOutletComponent;
  let fixture: ComponentFixture<SecondaryOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
