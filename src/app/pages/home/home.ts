import { Component, inject, signal } from '@angular/core';
import { AuthInfo, UserService } from '../../api';
import { WelcomeBanner } from "../../components/home/welcome-banner/welcome-banner";
import { InformationCircle } from '../../components/home/information-circle/information-circle';
import { CommonModule } from '@angular/common';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'app-home',
  imports: [CommonModule, WelcomeBanner, InformationCircle],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
    private readonly appStore = inject(AppStore);
    informationCircles = [
        { text: 'Odkryj projekty i pomysły, które zmieniają Kraków', icon: 'search' },
        { text: 'Dołącz do wydarzeń i działań społecznych', icon: 'done' },
        { text: 'Znajdź miejsce, gdzie Twoja pomoc jest potrzebna', icon: 'house' },
        { text: 'Masz pomysł? Podziel się nim z innymi', icon: 'lightbulb_2' },
        { text: 'Dołącz do grona aktywnych wolontariuszy', icon: 'accessibility_new' },

    ];

    constructor(private userService: UserService) {}

    // ngOnInit(): void {
    //     this.userService.getUserInfo().subscribe({
    //     next: (u) => this.appStore.setAuthInfo(u),
    //         error: (err) => {
    //             console.error('User info failed', err);
    //         }
    //     });
    // }
}
