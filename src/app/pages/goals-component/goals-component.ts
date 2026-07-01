import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell,faMoon,faCalendar,faSquareCheck,faCircleDot,faClipboard,faChartBar} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-goals-component',
  imports: [FontAwesomeModule],
  templateUrl: './goals-component.html',
  styleUrl: './goals-component.css',
})
export class GoalsComponent {
   faCircleDot = faCircleDot;
}
