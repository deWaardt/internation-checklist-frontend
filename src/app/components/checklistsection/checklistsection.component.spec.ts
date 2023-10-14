import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistsectionComponent } from './checklistsection.component';

describe('ChecklistsectionComponent', () => {
  let component: ChecklistsectionComponent;
  let fixture: ComponentFixture<ChecklistsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecklistsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
