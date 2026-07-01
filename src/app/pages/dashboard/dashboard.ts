import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell,faMoon,faCalendar,faSquareCheck,faCircleDot,faClipboard,faChartBar} from '@fortawesome/free-regular-svg-icons';
import { faArrowTrendUp ,faStopwatch,faUser} from '@fortawesome/free-solid-svg-icons';
import { Masterservice } from '../masterservice/masterservice';
import { ChangeDetectorRef } from '@angular/core';

  

@Component({
  selector: 'app-dashboard',
  imports: [FontAwesomeModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  
  masterser=inject(Masterservice)
  cd = inject(ChangeDetectorRef)

  upcomingmeeting:any[]=[];
  todaymeeting:any[]=[];
  todayeventsarr:any[]=[];
  upcomingeventsarr:any[]=[];
  todaymeetcount:number=0;
  todayeventcount:number=0;
  todaydate = new Date().toISOString().split('T')[0];

  facalandar=faCalendar;
  fastopwatch=faStopwatch;
  faArrowTrendUp = faArrowTrendUp;
  faSquareCheck = faSquareCheck;
  faCircleDot = faCircleDot;
  fauser=faUser;

  ngOnInit(): void {

    // this.masterser.upcomingmeeting.subscribe(data => {
    //   this.upcomingmeeting = data;
    //   console.log(this.upcomingmeeting);
    // });
    this.getmeeting();
    this.gettodayevent();
    // this.masterser.todaycomingmeeting.subscribe(data=>{
    //   this.todaymeeting=data;
    //   this.todaymeetcount=this.todaymeeting.length
      
    // })
  }
  getmeeting(){
    this.masterser.getMeetingdata().subscribe((res:any[])=>{
      this.upcomingmeeting=res;
      console.log(this.upcomingmeeting);

      this.todaymeeting=res.filter((item)=>
        item.meetingDate >= this.todaydate
      );
       
      this.cd.detectChanges();
      console.log(this.todaymeeting);
     
      console.log("Count:", this.todaymeetcount);

    })
  }
  gettodayevent(){
    this.masterser.geEventdata().subscribe((res:any[])=>{
      this.todayeventsarr=res.filter(item=>
        item.date === this.todaydate
      );
      this.cd.detectChanges();
      this.upcomingeventsarr=res.filter(item=>
        item.date >= this.todaydate
      );
      console.log(this.upcomingeventsarr)
      this.cd.detectChanges();
      
    })   
  }
}
