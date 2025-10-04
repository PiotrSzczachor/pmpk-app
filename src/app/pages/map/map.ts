import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventsFilters } from '../../components/events/events-filters/events-filters';

@Component({
  selector: 'app-map',
  imports: [CommonModule, EventsFilters],
  templateUrl: './map.html',
  styleUrl: './map.scss'
})
export class Map {

}
