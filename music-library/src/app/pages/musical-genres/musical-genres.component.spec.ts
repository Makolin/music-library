import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalGenresComponent } from './musical-genres.component';

describe('MusicalGenresComponent', () => {
  let component: MusicalGenresComponent;
  let fixture: ComponentFixture<MusicalGenresComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [MusicalGenresComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
