import { Component, signal } from '@angular/core';
import { AuthInfo, UserService } from '../../api';
import { WelcomeBanner } from "../../components/home/welcome-banner/welcome-banner";
import { InformationCircle } from '../../components/home/information-circle/information-circle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, WelcomeBanner, InformationCircle],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
    user = signal<AuthInfo | null>(null);
    informationCircles = [
        { text: 'Odkryj projekty i pomysły, które zmieniają Kraków', icon: 'search' },
        { text: 'Dołącz do wydarzeń i działań społecznych', icon: 'done' },
        { text: 'Znajdź miejsce, gdzie Twoja pomoc jest potrzebna', icon: 'house' },
        { text: 'Masz pomysł? Podziel się nim z innymi', icon: 'lightbulb_2' },
        { text: 'Dołącz do grona aktywnych wolontariuszy', icon: 'accessibility_new' },

    ];

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
