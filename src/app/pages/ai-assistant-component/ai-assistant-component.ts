import { Component } from '@angular/core';
import {faGlobe,faPalette,faGear,faWandMagicSparkles,faUser,  faTableCellsLarge} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-ai-assistant-component',
  imports: [FontAwesomeModule],
  templateUrl: './ai-assistant-component.html',
  styleUrl: './ai-assistant-component.css',
})
export class AiAssistantComponent {
  fasparkles=faWandMagicSparkles;
}
