import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistBuilderComponent } from './checklist-builder.component';

describe('ChecklistBuilderComponent', () => {
  let component: ChecklistBuilderComponent;
  let fixture: ComponentFixture<ChecklistBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecklistBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
