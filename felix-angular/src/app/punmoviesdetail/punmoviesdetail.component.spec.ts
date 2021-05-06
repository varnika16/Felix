import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunmoviesdetailComponent } from './punmoviesdetail.component';

describe('PunmoviesdetailComponent', () => {
  let component: PunmoviesdetailComponent;
  let fixture: ComponentFixture<PunmoviesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunmoviesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunmoviesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
