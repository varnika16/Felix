import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HinmoviesdetailComponent } from './hinmoviesdetail.component';

describe('HinmoviesdetailComponent', () => {
  let component: HinmoviesdetailComponent;
  let fixture: ComponentFixture<HinmoviesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HinmoviesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HinmoviesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
