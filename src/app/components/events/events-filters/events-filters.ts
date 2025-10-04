import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-events-filters',
  imports: [FormsModule, MatIconModule],
  templateUrl: './events-filters.html',
  styleUrl: './events-filters.scss'
})
export class EventsFilters {
}
