import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngmoviesdetailComponent } from './engmoviesdetail.component';

describe('EngmoviesdetailComponent', () => {
  let component: EngmoviesdetailComponent;
  let fixture: ComponentFixture<EngmoviesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngmoviesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngmoviesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
