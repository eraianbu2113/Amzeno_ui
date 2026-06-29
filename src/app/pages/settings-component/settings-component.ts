import { Component } from '@angular/core';
import {faGlobe,faPalette,faGear,faWandMagicSparkles,faUser,  faTableCellsLarge} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell,faMoon,faCalendar,faSquareCheck,faCircleDot,faClipboard,faChartBar} from '@fortawesome/free-regular-svg-icons';
import { RouterLink } from "@angular/router";



@Component({
  selector: 'app-settings-component',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './settings-component.html',
  styleUrl: './settings-component.css',
})
export class SettingsComponent {
  selectedButton: string = '';
  fagear = faGear;
  fauser=faUser;
  fabell=faBell;
  faglobe=faGlobe;
  fapalette=faPalette
}
