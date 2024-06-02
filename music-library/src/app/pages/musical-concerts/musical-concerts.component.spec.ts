import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalConcertsComponent } from './musical-concerts.component';

describe('MusicalConcertsComponent', () => {
  let component: MusicalConcertsComponent;
  let fixture: ComponentFixture<MusicalConcertsComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [MusicalConcertsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalConcertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
