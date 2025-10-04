import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventsFilters } from '../../components/events/events-filters/events-filters';
import { EventsMap } from '../../components/events/events-map/events-map';

@Component({
  selector: 'app-map',
  imports: [CommonModule, EventsFilters, EventsMap],
  templateUrl: './map.html',
  styleUrl: './map.scss'
})
export class Map {
  
}
