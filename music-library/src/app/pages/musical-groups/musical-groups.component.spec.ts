import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalGroupsComponent } from './musical-groups.component';

describe('MusicalGroupsComponent', () => {
  let component: MusicalGroupsComponent;
  let fixture: ComponentFixture<MusicalGroupsComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [MusicalGroupsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});