import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KorseriesdetailComponent } from './korseriesdetail.component';

describe('KorseriesdetailComponent', () => {
  let component: KorseriesdetailComponent;
  let fixture: ComponentFixture<KorseriesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorseriesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorseriesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
