import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngseriesdetailComponent } from './engseriesdetail.component';

describe('EngseriesdetailComponent', () => {
  let component: EngseriesdetailComponent;
  let fixture: ComponentFixture<EngseriesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngseriesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngseriesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
