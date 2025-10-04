import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventItem } from '../event-item/event-item';

@Component({
  selector: 'app-saved-events-list',
  imports: [FormsModule, EventItem],
  templateUrl: './saved-events-list.html',
  styleUrl: './saved-events-list.scss'
})
export class SavedEventsList {
  selectedFilter = "najnowsze";
}
