import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistitemComponent } from './checklistitem.component';

describe('ChecklistitemComponent', () => {
  let component: ChecklistitemComponent;
  let fixture: ComponentFixture<ChecklistitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecklistitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
