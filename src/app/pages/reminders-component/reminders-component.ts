import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell,faAlarmClock,faFileLines,faMoon,faCalendar,faSquareCheck,faCircleDot,faClipboard,faChartBar} from '@fortawesome/free-regular-svg-icons';
import { faCoffee,faGear,faWandMagicSparkles,faUser,faArrowRightFromBracket,faTableCellsLarge} from '@fortawesome/free-solid-svg-icons';
import { Masterservice } from '../masterservice/masterservice';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-reminders-component',
  imports: [FontAwesomeModule,FormsModule],
  templateUrl: './reminders-component.html',
  styleUrl: './reminders-component.css',
})
export class RemindersComponent implements OnInit{

  masterser=inject(Masterservice);
  cd = inject(ChangeDetectorRef)

  fabell=faBell;
  fafilelines=faFileLines;
  faalarmclock=faAlarmClock;

  reminderlist:any={
    reminderTime: '',
    remindertitle:''
  }
  reminderdetailes:any[]=[];
  upcomingreminder:any[]=[];
  reminderlistcount:number=0;
  todaydtime=new Date();

  ngOnInit(): void {
      this.ongetReminderdetailes();
      
  }
  

  setReminder(meeting:any) {
    const reminderDate = new Date(meeting.reminderTime);
    console.log(meeting.reminderTime)
    const currentDate = new Date();

    const delay = reminderDate.getTime() - currentDate.getTime();
    console.log(reminderDate)
    console.log(delay)

    if (delay > 0) {
      setTimeout(() => 
        {
        alert(meeting.remindertitle);
        this.deletereminder(meeting.id);
        }, delay);
      }
    this.cd.detectChanges();  
  }

  saveremainder(){
    this.masterser.postReminder(this.reminderlist).subscribe((res)=>{
      alert("posted reminder");
      this.ongetReminderdetailes();
      this.onCloseEvents();
    },error=>{
      alert(JSON.stringify(error))
    })
  }

  ongetReminderdetailes(){
    this.masterser.getReminder().subscribe((res)=>{
      this.reminderdetailes=res;

      this.upcomingreminder=res.filter(item=>
        new Date( item.reminderTime )>= this.todaydtime
      );
      this.cd.detectChanges();

      this.reminderdetailes.forEach(meeting => {
        this.setReminder(meeting);
      });
      this.cd.detectChanges();
      
      console.log(this.todaydtime)
      console.log(this.upcomingreminder)
      
    })
  }

  deletereminder(id:string){
    this.masterser.deletereminder(id).subscribe((res)=>{
      alert("deleted ");
      this.reminderdetailes=this.reminderdetailes.filter(item=>item.id !==id); 
      this.cd.detectChanges();
    })
    
  }
  
  onAddReminder(){
    const model=document.getElementById("myModal");
    if(model !=null){
      model.style.display="block"
    }
  }
  onCloseEvents(){
    const model=document.getElementById("myModal");
    if(model !=null){
      model.style.display="none"
    }
  }

}
