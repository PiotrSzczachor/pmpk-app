import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-events-filters',
  imports: [FormsModule, MatIconModule, MatFormFieldModule, MatDatepickerModule],
  templateUrl: './events-filters.html',
  styleUrl: './events-filters.scss'
})
export class EventsFilters {
  selectedDate: Date | null = null;
}
