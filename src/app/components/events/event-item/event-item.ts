import { CommonModule, DatePipe, NgIf } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EventDto } from '../../../api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-item',
  imports: [MatIconModule, CommonModule, DatePipe],
  templateUrl: './event-item.html',
  styleUrl: './event-item.scss'
})
export class EventItem implements OnInit{
  @Input() event!: EventDto | null;
  @Input() showStatus: boolean = false;
  @Input() generateCertificate: boolean = false;

  month!: string;
  day!: string;
  weekday!: string;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    if (this.event?.startDate) {
      const date = new Date(this.event.startDate);

      const monthFormatter = new Intl.DateTimeFormat('pl-PL', { month: 'short' });
      const weekdayFormatter = new Intl.DateTimeFormat('pl-PL', { weekday: 'short' });

      this.month = this.capitalize(monthFormatter.format(date));
      this.day = date.getDate().toString().padStart(2, '0');
      this.weekday = this.capitalize(weekdayFormatter.format(date));
    }
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  redirectToEvent() {
    if(this.event) {
      const id = this.event.guid;
      this.router.navigate(['/event/' + id]);
    }
  }
}
