import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SavedEventsList } from '../../../components/events/saved-events-list/saved-events-list';
import { AppStore } from '../../../store/app.store';

@Component({
  selector: 'app-profile-view',
  imports: [CommonModule, DatePipe, SavedEventsList],
  templateUrl: './profile-view.html',
  styleUrl: './profile-view.scss'
})
export class ProfileView {
    appStore = inject(AppStore);
  userLoged = true;
  user: any = {
    firstName: this.appStore.authInfo()?.name,
    accountCreated: new Date("2025-10-04")
  }

}
