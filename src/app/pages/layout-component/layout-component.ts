import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee,faGear,faWandMagicSparkles,faUser,faArrowRightFromBracket,faTableCellsLarge} from '@fortawesome/free-solid-svg-icons';
import { faBell,faMoon,faCalendar,faSquareCheck,faCircleDot,faClipboard,faChartBar} from '@fortawesome/free-regular-svg-icons';



@Component({
  selector: 'app-layout-component',
  imports: [RouterOutlet,RouterLink,RouterLinkActive,FontAwesomeModule],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css',
})
export class LayoutComponent {
  faCoffee = faCoffee;
  faCalander=faCalendar;
  fabell=faBell;
  famoon=faMoon;
  fagear = faGear;
  faSquareCheck = faSquareCheck;
  faCircleDot = faCircleDot;
  faClipboard = faClipboard;
  faWandMagicSparkles = faWandMagicSparkles;
  faChartBar = faChartBar;
  fauser=faUser;
  fatable= faTableCellsLarge
  faArrowRightFromBracket=faArrowRightFromBracket
}
