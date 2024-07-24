import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsRowComponent } from './albums-row.component';

describe('AlbumsRowComponent', () => {
  let component: AlbumsRowComponent;
  let fixture: ComponentFixture<AlbumsRowComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [AlbumsRowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
