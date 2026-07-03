import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell,faMoon,faCalendar,faSquareCheck,faCircleDot,faClipboard,faChartBar} from '@fortawesome/free-regular-svg-icons';
import { faArrowTrendUp ,faStopwatch,faUser} from '@fortawesome/free-solid-svg-icons';
import { Masterservice } from '../masterservice/masterservice';
import { ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';


  

@Component({
  selector: 'app-dashboard',
  imports: [FontAwesomeModule, HighchartsChartComponent,CalendarModule],
  standalone:true,
  templateUrl: './dashboard.html',
 styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {
  
  masterser=inject(Masterservice);
  cd = inject(ChangeDetectorRef);
 

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'areaspline',
      backgroundColor: 'transparent',
      height: 250
    },

    title: {
      text: 'Weekly Productivity',
      align: 'left',
      style: {
        fontWeight: 'bold',
        fontSize: '18px'
      }
    },

    credits: {
      enabled: false
    },

    xAxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      lineWidth: 0,
      tickWidth: 0
    },

    yAxis: {
      title: {
        text: ''
      },
      gridLineWidth: 0,
      labels: {
        enabled: false
      }
    },

    legend: {
      align: 'right',
      verticalAlign: 'top'
    },

    tooltip: {
      shared: true
    },

    plotOptions: {
      series: {
        marker: {
          enabled: false
        }
      },
      areaspline: {
        fillOpacity: 0.15
      }
    },

    series: [

      {
        type: 'areaspline',
        name: 'Tasks',
        color: '#304FFE',
        data: [35, 50, 40, 60, 48, 20, 15]
      },

      {
        type: 'areaspline',
        name: 'Focus',
        color: '#2DD4FF',
        data: [30, 38, 35, 45, 38, 15, 12]
      },

      {
        type: 'spline',
        name: 'Meetings',
        dashStyle: 'ShortDot',
        color: '#8B5CF6',
        data: [15, 22, 10, 28, 18, 3, 3]
      }

    ]
  };


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

    this.getmeeting();
    this.gettodayevent();
    
    
  }
  getmeeting(){
    this.masterser.getMeetingdata().subscribe((res:any[])=>{
      this.upcomingmeeting=res;
      console.log(this.upcomingmeeting);
      this.todaymeetcount=this.todaymeeting.length
      this.todaymeeting=res.filter((item)=>
        item.meetingDate >= this.todaydate
      );
      
      
      if (this.todaymeeting.length!=this.todaymeeting.length) {
         this.postweeklyevent();
        }
      this.cd.detectChanges();
      console.log(this.todaymeetcount);


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
  postweeklyevent(){
    const weeklyeventObj:any={
      "Day": new Date().toLocaleDateString('en-US', {
        weekday: 'short'}),
      "task":"",
      "focus":"",
      "meetings":this.todaymeeting.length,
    }
    this.masterser.postweekly(weeklyeventObj).subscribe((res)=>{
      alert("posted weeklyevent")
    },error=>{
      alert(JSON.stringify(error))
    })
   
    
  }
   
}
