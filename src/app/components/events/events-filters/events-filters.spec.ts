import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsFilters } from './events-filters';

describe('EventsFilters', () => {
  let component: EventsFilters;
  let fixture: ComponentFixture<EventsFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsFilters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsFilters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
