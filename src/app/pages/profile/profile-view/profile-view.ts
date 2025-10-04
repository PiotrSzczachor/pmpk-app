import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SavedEventsList } from '../../../components/events/saved-events-list/saved-events-list';

@Component({
  selector: 'app-profile-view',
  imports: [CommonModule, DatePipe, SavedEventsList],
  templateUrl: './profile-view.html',
  styleUrl: './profile-view.scss'
})
export class ProfileView {
  userLoged = true;
  user: any = {
    firstName: "Cyprian",
    lastName: "Banino",
    accountCreated: new Date("2024-12-06")
  }

}
