import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalTracksComponent } from './musical-tracks.component';

describe('MusicalTracksComponent', () => {
  let component: MusicalTracksComponent;
  let fixture: ComponentFixture<MusicalTracksComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [MusicalTracksComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});