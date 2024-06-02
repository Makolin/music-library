import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresRowComponent } from './genres-row.component';

describe('GenresRowComponent', () => {
  let component: GenresRowComponent;
  let fixture: ComponentFixture<GenresRowComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [GenresRowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
