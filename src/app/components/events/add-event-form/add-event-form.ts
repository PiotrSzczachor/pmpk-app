import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-event-form',
  imports: [ReactiveFormsModule],
  templateUrl: './add-event-form.html',
  styleUrl: './add-event-form.scss'
})
export class AddEventForm {
  @Input() formGroup!: FormGroup;
}
