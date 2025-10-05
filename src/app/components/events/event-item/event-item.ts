import { NgIf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EventDto } from '../../../api';

@Component({
  selector: 'app-event-item',
  imports: [MatIconModule, NgIf],
  templateUrl: './event-item.html',
  styleUrl: './event-item.scss'
})
export class EventItem{
  @Input() event!: EventDto;
  @Input() showStatus: boolean = false;
  @Input() generateCertificate: boolean = false;
}
