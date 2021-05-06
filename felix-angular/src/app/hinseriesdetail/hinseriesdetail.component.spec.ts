import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HinseriesdetailComponent } from './hinseriesdetail.component';

describe('HinseriesdetailComponent', () => {
  let component: HinseriesdetailComponent;
  let fixture: ComponentFixture<HinseriesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HinseriesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HinseriesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
