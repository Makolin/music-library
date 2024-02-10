import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalAlbumsComponent } from './musical-albums.component';

describe('MusicalAlbumsComponent', () => {
  let component: MusicalAlbumsComponent;
  let fixture: ComponentFixture<MusicalAlbumsComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [MusicalAlbumsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});