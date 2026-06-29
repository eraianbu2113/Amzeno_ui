import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell,faMoon,faCalendar,faSquareCheck,faCircleDot,faClipboard,faChartBar} from '@fortawesome/free-regular-svg-icons';
import { faArrowTrendUp ,faUser} from '@fortawesome/free-solid-svg-icons';

  

@Component({
  selector: 'app-dashboard',
  imports: [FontAwesomeModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
facalandar=faCalendar;
faArrowTrendUp = faArrowTrendUp;
faSquareCheck = faSquareCheck;
faCircleDot = faCircleDot;
fauser=faUser;
}
