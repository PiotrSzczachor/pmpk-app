import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgIf],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isLogged: boolean = true;

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

  navigateToMap() {
    this.router.navigate(['/map']);
  }

  navigateToMyEvents() {
    this.router.navigate(['/my-events']);
  }

  navigateToChat() {
    this.router.navigate(['/chat']);
  }
}
