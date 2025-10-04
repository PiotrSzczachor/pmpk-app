import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(
    private router: Router
  ) {

  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToEvents() {
    this.router.navigate(['/events']);
  }
}
