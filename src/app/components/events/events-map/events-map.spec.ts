import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsMap } from './events-map';

describe('EventsMap', () => {
  let component: EventsMap;
  let fixture: ComponentFixture<EventsMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
