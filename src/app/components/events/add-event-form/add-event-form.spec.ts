import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventForm } from './add-event-form';

describe('AddEventForm', () => {
  let component: AddEventForm;
  let fixture: ComponentFixture<AddEventForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEventForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEventForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
