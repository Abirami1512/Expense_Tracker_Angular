import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box',
  standalone: true,
  templateUrl: './display-box.component.html',
  styleUrls: ['./display-box.component.css'],
  imports: [CommonModule]
})

export class DisplayBoxComponent {
  @Input() value: string = ''; 
  @Input() desc: string = ''; // Input property for the value to be displayed
  @Input() textColor: string = '#000'; // Input property for the text color
}