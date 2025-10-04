import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-information-circle',
  imports: [MatIconModule],
  templateUrl: './information-circle.html',
  styleUrl: './information-circle.scss'
})
export class InformationCircle {
    @Input() text!: string;
    @Input() icon!: string;
}
