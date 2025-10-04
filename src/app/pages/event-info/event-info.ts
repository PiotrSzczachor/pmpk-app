import { Component } from '@angular/core';
import { EventItem } from "../../components/events/event-item/event-item";
import { EventMap } from "../../components/events/event-map/event-map";

@Component({
  selector: 'app-event-info',
  imports: [EventItem, EventMap],
  templateUrl: './event-info.html',
  styleUrl: './event-info.scss'
})
export class EventInfo {
  save() {

  }
}
