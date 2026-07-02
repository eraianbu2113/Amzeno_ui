import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Masterservice {
  // upcomingmeeting = new BehaviorSubject<any[]>([]);
  // todaycomingmeeting = new BehaviorSubject<any[]>([]);
  ApiURL="http://localhost:3001/";
  
  constructor(private http:HttpClient ){}

  postEventdate(obj:any){
    return this.http.post<any[]>(this.ApiURL+"events",obj)
  }
  geEventdata(){
    return this.http.get<any[]>(this.ApiURL+"events")
  }

  postMeetingdetails(obj:any){
    return this.http.post<any[]>(this.ApiURL+"meetings",obj)
  }
  getMeetingdata(){
    return this.http.get<any[]>(this.ApiURL+"meetings")
  }
  getDeletemeeting(id:string){
    return this.http.delete(`${this.ApiURL}meetings/${id}`)
  }

  postReminder(obj:any){
    return this.http.post<any[]>(this.ApiURL+"Reminder",obj)
  }
  getReminder(){
    return this.http.get<any[]>(this.ApiURL+"Reminder")
  }
  deletereminder(id:string){
    return this.http.delete(`${this.ApiURL}Reminder/${id}`)

  }
}
