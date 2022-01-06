import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieVideoComponent } from './movie-video.component';

describe('MovieVideoComponent', () => {
  let component: MovieVideoComponent;
  let fixture: ComponentFixture<MovieVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
