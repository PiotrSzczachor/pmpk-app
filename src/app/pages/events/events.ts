import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { EventsFilters } from '../../components/events/events-filters/events-filters';
import { EventsList } from "../../components/events/events-list/events-list";
import { AppStore } from '../../store/app.store';
import { EventsService } from '../../api';

@Component({
  selector: 'app-events',
  imports: [CommonModule, EventsFilters, EventsList],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class Events implements OnInit{
  appStore = inject(AppStore);

  constructor(private eventsService: EventsService) {

  }

  ngOnInit(): void {
    this.eventsService.eventsGet().subscribe({
        next: (e) => this.appStore.setEvents(e),
            error: (err) => {
                console.error('Events failed', err);
            }
        });
  }
}
