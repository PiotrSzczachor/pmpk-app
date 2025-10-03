import { Component, signal } from '@angular/core';
import { AuthInfo, UserService } from '../../api';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
    user = signal<AuthInfo | null>(null);

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userService.getUserInfo().subscribe({
        next: (u) => this.user.set(u),
            error: (err) => {
                console.error('User info failed', err);
            }
        });
    }
}
