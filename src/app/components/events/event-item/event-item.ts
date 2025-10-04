import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-event-item',
  imports: [MatIconModule, NgIf],
  templateUrl: './event-item.html',
  styleUrl: './event-item.scss'
})
export class EventItem {
  @Input() showStatus: boolean = false;
  @Input() generateCertificate: boolean = false;
}
