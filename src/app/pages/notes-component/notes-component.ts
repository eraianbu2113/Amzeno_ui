import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell,faMoon,faFileLines,faCalendar,faSquareCheck,faCircleDot,faClipboard,faChartBar} from '@fortawesome/free-regular-svg-icons';
import { faCoffee,faGear,faWandMagicSparkles,faUser,faArrowRightFromBracket,faTableCellsLarge} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-notes-component',
  imports: [FontAwesomeModule],
  templateUrl: './notes-component.html',
  styleUrl: './notes-component.css',
})
export class NotesComponent {
  faclipboard=faClipboard;
  fafileslines=faFileLines
}
