import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsRowComponent } from './groups-row.component';

describe('GroupsRowComponent', () => {
  let component: GroupsRowComponent;
  let fixture: ComponentFixture<GroupsRowComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [GroupsRowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
