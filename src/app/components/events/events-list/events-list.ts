import { Component, Input } from '@angular/core';
import { EventItem } from "../event-item/event-item";
import { EventDto } from '../../../api';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-events-list',
  imports: [EventItem, NgFor],
  templateUrl: './events-list.html',
  styleUrl: './events-list.scss'
})
export class EventsList {
  @Input() events: Array<EventDto> = new Array();
}
