import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-events-map',
  imports: [],
  templateUrl: './events-map.html',
  styleUrl: './events-map.scss'
})
export class EventsMap implements AfterViewInit {
  private map!: L.Map;

  ngAfterViewInit(): void {
    this.map = L.map('map', {
      center: [50.0619, 19.9369],
      zoom: 15
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    const customIcon = L.icon({
      iconUrl: 'marker-icon.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    L.marker([50.0619, 19.9369], { icon: customIcon })
      .addTo(this.map)
      .bindPopup('<b>Kraków</b><br>Spawner naganiaczy klubowych');
  }
}
