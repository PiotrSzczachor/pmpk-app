import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, UserService } from '../../api';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'app-header',
  imports: [NgIf],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isLogged: boolean = true;
  appStore = inject(AppStore);

  constructor(
    private router: Router, private authService: AuthService, private userService: UserService
  ) {

  }

  login() {
    const returnUrl = window.location.origin;
    const basePath = this.authService.configuration.basePath;
    window.document.location.href = basePath + '/auth/login?returnUrl=' + returnUrl
  }

  logout() {
    console.log('logout');
    this.authService.logout().subscribe(x => window.location.reload());
  }

  navigateToHome() {
    console.log(this.appStore.authInfo())
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

    navigateToAddEvent() {
    this.router.navigate(['/add-event']);
  }
  
  
      ngOnInit(): void {
          this.userService.getUserInfo().subscribe({
          next: (u) => this.appStore.setAuthInfo(u),
              error: (err) => {
                  console.error('User info failed', err);
              }
          });
      }
}
