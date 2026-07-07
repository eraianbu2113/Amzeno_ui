import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell ,faTrashCan,faMoon,faCalendar,faSquareCheck,faCircleDot,faClipboard,faChartBar} from '@fortawesome/free-regular-svg-icons';
import { faCoffee,faStopwatch,faPenToSquare,faVideo,faGear,faWandMagicSparkles,faUser,faArrowRightFromBracket,faTableCellsLarge} from '@fortawesome/free-solid-svg-icons';
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
  faPenToSquare=faPenToSquare;
  fatrashcan=faTrashCan;
  fastopwatch=faStopwatch;
  facalendar=faCalendar

  meetingObj:any={
    "meetingtitle":"",
    "meetingDate":new Date(),
    "meetingduraction":""
  }
  todaydate = new Date().toISOString().split('T')[0];
  masterser=inject(Masterservice);
  todaymeetingdata:any[]=[];
  pastMeetingsdate:any[]=[];
  upcomingMeeting:any[]=[];

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
    this.masterser.getMeetingdata().subscribe((res:any[])=>{
      this.upcomingMeeting=res;
      
      this.todaymeetingdata=res.filter(item=>
        item.meetingDate >= this.todaydate
      );
      this.cd.detectChanges();
      console.log(this.todaymeetingdata);
      console.log(this.todaydate);

      // this.masterser.upcomingmeeting.next(this.upcomingMeeting);
      // this.masterser.todaycomingmeeting.next(this.todaymeetingdata);
      

      this.pastMeetingsdate = res.filter(item =>
      item.meetingDate < this.todaydate
      );
      
      this.cd.detectChanges();
     
    });
  }
  onDeletemeeting(id:string){
    const isDelete=confirm("Are you want to delete")
    if(isDelete){
      this.masterser.getDeletemeeting(id).subscribe(()=>{
      alert("Meeting deleted successfully");
      this.onshowmeeting();
    })
    }
    
  }

  onEdit(data:any){
    this.onaddEvents()
    this.meetingObj=data;
  }
  onUpdatemeeting(id:string){
    this.masterser.updateMeetingdetails(this.meetingObj,id).subscribe((res:any)=>{
      alert("sucess");
      this.onshowmeeting()
      this.onCloseEvents()
    },error=>{
      alert(JSON.stringify(error))
    })
  }
  
}
