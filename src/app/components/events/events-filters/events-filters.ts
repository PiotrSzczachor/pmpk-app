import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-filters',
  standalone: true,
  imports: [FormsModule, MatIconModule, NgIf],
  templateUrl: './events-filters.html',
  styleUrl: './events-filters.scss'
})
export class EventsFilters {
  @Input() isMap: boolean = false;

  constructor(private router: Router) {

  }

  navigateToEvents() {
    this.router.navigate(['/events']);
  }

  navigateToMap() {
    this.router.navigate(['/map']);
  }
}
