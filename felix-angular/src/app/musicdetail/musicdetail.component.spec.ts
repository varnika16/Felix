import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicdetailComponent } from './musicdetail.component';

describe('MusicdetailComponent', () => {
  let component: MusicdetailComponent;
  let fixture: ComponentFixture<MusicdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
