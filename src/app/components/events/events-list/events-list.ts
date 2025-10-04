import { Component } from '@angular/core';
import { EventItem } from "../event-item/event-item";

@Component({
  selector: 'app-events-list',
  imports: [EventItem],
  templateUrl: './events-list.html',
  styleUrl: './events-list.scss'
})
export class EventsList {

}
