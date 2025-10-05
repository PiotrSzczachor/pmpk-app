import { Component, inject } from '@angular/core';
import { EventItem } from "../../components/events/event-item/event-item";
import { EventMap } from "../../components/events/event-map/event-map";
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../api';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'app-event-info',
  imports: [EventItem, EventMap],
  templateUrl: './event-info.html',
  styleUrl: './event-info.scss'
})
export class EventInfo {
  appStore = inject(AppStore);
  eventId!: string | null;

  constructor(private route: ActivatedRoute, private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('id');

    if(this.eventId) {
      this.eventsService.eventsEventIdGet(this.eventId).subscribe({
          next: (e) => this.appStore.setEvent(e),
              error: (err) => {
                  console.error('Events failed', err);
              }
          });
    }
  }


  save() {
    console.log(this.appStore.event());
  }
}
