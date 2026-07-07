import { Component , inject, OnInit, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule, FullCalendarComponent } from '@fullcalendar/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell,faMoon,faCalendar,faSquareCheck,faCircleDot,faClipboard,faChartBar} from '@fortawesome/free-regular-svg-icons';
import { CalendarOptions } from '@fullcalendar/core'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Masterservice } from '../masterservice/masterservice';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-calendar-component',
  imports: [FullCalendarModule,FormsModule,FontAwesomeModule],
  templateUrl: './calendar-component.html',
  styleUrl: './calendar-component.css',
})

export class CalendarComponent implements OnInit  {
  facalendar = faCalendar;
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  mastser=inject(Masterservice);
  cd = inject(ChangeDetectorRef)

  eventobj:any={
    "title":"",
    "time":"",
    "date": ""
  }
  eventsarr:any[]=[];
  todayeventsarr:any[]=[];
  todaydate=new Date().toISOString().split('T')[0];
  calendarOptions: CalendarOptions = 
  {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin,interactionPlugin], 
    dateClick: (arg) => this.handleDateClick(arg),
    events: this.eventsarr
  };

  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }
  ngOnInit(): void {
      this.showevents();
      
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
  onSaveEvent(){
    this.mastser.postEventdate(this.eventobj).subscribe((res:any)=>{
      alert("sucess");
      this.onCloseEvents()
      this.showevents()
    },error=>{
      alert(JSON.stringify(error))
    })
    // this.events.push(this.eventobj)
    // this.eventobj = {
    // "title":"",
    // "date": ""
    // }
    // this.calendarOptions = {
    //   ...this.calendarOptions,
    //   events: this.events
    // }
    // console.log(this.calendarOptions)

    // const calendarApi = this.calendarComponent.getApi()
    // calendarApi.addEvent({
    //   title: this.event.title,
    //   start: this.event.date
    // })
    // this.event = {
    //   "title":"",
    //   "date": ""
    // }
    this.onCloseEvents()
  }
  showevents() {

    this.mastser.geEventdata().subscribe((res: any[]) => {

      this.todayeventsarr=res.filter(item=>
        item.date === this.todaydate
      );
      this.cd.detectChanges();
      console.log(res)
      console.log(this.todayeventsarr)
      console.log(this.todayeventsarr.length)
      this.todayeventsarr=this.todayeventsarr;

      const calendarApi = this.calendarComponent.getApi();

      calendarApi.removeAllEvents();

      res.forEach(event => {
        calendarApi.addEvent({
          title: event.title,
          start: event.date
        });
      });
    });
  }
}
