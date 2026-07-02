import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell,faAlarmClock,faFileLines,faMoon,faCalendar,faSquareCheck,faCircleDot,faClipboard,faChartBar} from '@fortawesome/free-regular-svg-icons';
import { faCoffee,faGear,faWandMagicSparkles,faUser,faArrowRightFromBracket,faTableCellsLarge} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-reminders-component',
  imports: [FontAwesomeModule,FormsModule],
  templateUrl: './reminders-component.html',
  styleUrl: './reminders-component.css',
})
export class RemindersComponent {
  fabell=faBell;
  fafilelines=faFileLines;
  faalarmclock=faAlarmClock;

  // reminderTime: string = '';

  // setReminder() {
  //   const reminderDate = new Date(this.reminderTime);
  //   const currentDate = new Date();

  //   const delay = reminderDate.getTime() - currentDate.getTime();

  //   if (delay <= 0) {
  //     alert("Please select a future time");
  //     return;
  //   }

  //   setTimeout(() => {
  //     alert("Reminder!");
  //   }, delay);

  // }
}
