import { Component } from '@angular/core';
import {faGlobe,faPalette,faGear,faWandMagicSparkles,faUser,  faTableCellsLarge} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell,faMoon,faCalendar,faSquareCheck,faCircleDot,faClipboard,faChartBar} from '@fortawesome/free-regular-svg-icons';
import { RouterLink } from "@angular/router";
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-settings-component',
  imports: [FontAwesomeModule, RouterLink,NgIf],
  templateUrl: './settings-component.html',
  styleUrl: './settings-component.css',
})
export class SettingsComponent {
  selectedButton: string = '';
  fagear = faGear;
  fauser=faUser;
  fabell=faBell;
  faglobe=faGlobe;
  fapalette=faPalette;

  id:any='Profile';
  tabchange(ids:any){
    this.id=ids;
    console.log(this.id)
  }
  status = "OFF";

  onSwitchChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;

    if (checked) {
      this.status = "ON";
    } else {
      this.status = "OFF";
    }
  }
}
