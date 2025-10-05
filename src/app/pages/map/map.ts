import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { EventsFilters } from '../../components/events/events-filters/events-filters';
import { EventsMap } from '../../components/events/events-map/events-map';
import { AppStore } from '../../store/app.store';
import { EventsService } from '../../api';

@Component({
  selector: 'app-map',
  imports: [CommonModule, EventsFilters, EventsMap],
  templateUrl: './map.html',
  styleUrl: './map.scss'
})
export class Map implements OnInit {
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
