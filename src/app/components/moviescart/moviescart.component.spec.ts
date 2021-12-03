import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviescartComponent } from './moviescart.component';

describe('MoviescartComponent', () => {
  let component: MoviescartComponent;
  let fixture: ComponentFixture<MoviescartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviescartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviescartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
