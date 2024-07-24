import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertsRowComponent } from './concerts-row.component';

describe('ConcertsRowComponent', () => {
  let component: ConcertsRowComponent;
  let fixture: ComponentFixture<ConcertsRowComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ConcertsRowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
