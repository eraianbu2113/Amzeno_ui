import { Component } from '@angular/core';
import {faGlobe,faPalette,faGear,faWandMagicSparkles,faUser,  faTableCellsLarge} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell,faMoon,faCalendar,faSquareCheck,faCircleDot,faClipboard,faChartBar} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-analytics-component',
  imports: [FontAwesomeModule],
  templateUrl: './analytics-component.html',
  styleUrl: './analytics-component.css',
})
export class AnalyticsComponent {
fachartbar=faChartBar
}
