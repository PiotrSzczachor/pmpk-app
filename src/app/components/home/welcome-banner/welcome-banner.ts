import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-banner',
  imports: [],
  templateUrl: './welcome-banner.html',
  styleUrl: './welcome-banner.scss'
})
export class WelcomeBanner {
  constructor(private router: Router) {

  }

  navigateToEvents() {
    this.router.navigate(['/events']);
  }
}
