import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenworldComponent } from './openworld.component';

describe('OpenworldComponent', () => {
  let component: OpenworldComponent;
  let fixture: ComponentFixture<OpenworldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenworldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
