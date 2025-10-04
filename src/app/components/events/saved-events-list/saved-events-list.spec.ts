import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedEventsList } from './saved-events-list';

describe('SavedEventsList', () => {
  let component: SavedEventsList;
  let fixture: ComponentFixture<SavedEventsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedEventsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedEventsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
