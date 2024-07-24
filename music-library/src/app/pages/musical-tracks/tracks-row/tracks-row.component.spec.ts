import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksRowComponent } from './tracks-row.component';

describe('TracksRowComponent', () => {
  let component: TracksRowComponent;
  let fixture: ComponentFixture<TracksRowComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [TracksRowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
