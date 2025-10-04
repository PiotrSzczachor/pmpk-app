import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventsFilters } from '../../components/events/events-filters/events-filters';
import { EventsList } from "../../components/events/events-list/events-list";

@Component({
  selector: 'app-events',
  imports: [CommonModule, EventsFilters, EventsList],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class Events {

}
