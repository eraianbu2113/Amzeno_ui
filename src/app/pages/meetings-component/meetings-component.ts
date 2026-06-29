import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell ,faTrashCan,faMoon,faCalendar,faSquareCheck,faCircleDot,faClipboard,faChartBar} from '@fortawesome/free-regular-svg-icons';
import { faCoffee,faPenToSquare,faVideo,faGear,faWandMagicSparkles,faUser,faArrowRightFromBracket,faTableCellsLarge} from '@fortawesome/free-solid-svg-icons';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Masterservice } from '../masterservice/masterservice';

import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-meetings-component',
  imports: [FontAwesomeModule,FormsModule],
  templateUrl: './meetings-component.html',
  styleUrl: './meetings-component.css',
})
export class MeetingsComponent implements OnInit {
  fauser=faUser;
  favideo=faVideo;
  faPenToSquare=faPenToSquare
  fatrashcan=faTrashCan;

  meetingObj:any={
    "meetingtitle":"",
    "meetingDate":new Date(),
    "meetingduraction":""
  }
  masterser=inject(Masterservice);
  meetingdata:any[]=[];
  cd = inject(ChangeDetectorRef)
  ngOnInit(): void {
      this.onshowmeeting();
  }

  onaddEvents(){
    const model=document.getElementById("myModal");
    if (model !=null) {
      model.style.display="block"
    }
  }
  onCloseEvents(){
    const model=document.getElementById("myModal");
    if (model !=null) {
      model.style.display="none"
    }
  }
  onSavemeeting(){
    this.masterser.postMeetingdetails(this.meetingObj).subscribe((res:any)=>{
      alert("sucess");
      this.onshowmeeting()
      this.onCloseEvents()
    },error=>{
      alert(JSON.stringify(error))
    })
  }
  onshowmeeting(){
    this.masterser.getMeetingdata().subscribe((res:any)=>{
      this.meetingdata=res;
      console.log(res)
      this.cd.detectChanges();
     
    })
  }
  
}
