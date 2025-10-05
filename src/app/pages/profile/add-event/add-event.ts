import { Component, inject, OnInit } from '@angular/core';
import { AddEventForm } from '../../../components/events/add-event-form/add-event-form';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddEventDto, EventsService } from '../../../api';
import { AppStore } from '../../../store/app.store';

@Component({
  selector: 'app-add-event',
  imports: [AddEventForm, ReactiveFormsModule],
  templateUrl: './add-event.html',
  styleUrl: './add-event.scss'
})
export class AddEvent implements OnInit{
  formGroup!: FormGroup;
  appStore = inject(AppStore);

  constructor(private fb: FormBuilder, private eventsService: EventsService) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      title: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      street: ['', Validators.required],
      buildingNumber: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      description: ['']
    });
  }

  addEvent() {
    this.eventsService.eventsPost(this.formGroup.value as AddEventDto).subscribe({
      next: _ => console.log('OK'),
      error: err => console.error(err),
    });
  }
}
