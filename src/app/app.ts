import { Component, signal } from '@angular/core';
import {
  CalendarModule,
  DatePickerModule,
  TimePickerModule,
  DateRangePickerModule,
  DateTimePickerModule,
} from '@syncfusion/ej2-angular-calendars';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    CalendarModule,
    DatePickerModule,
    TimePickerModule,
    DateRangePickerModule,
    DateTimePickerModule,
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Amzeno');
}
