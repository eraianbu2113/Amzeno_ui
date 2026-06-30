import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Masterservice {
  upcomingmeeting = new BehaviorSubject<any[]>([]);
  todaycomingmeeting = new BehaviorSubject<any[]>([]);
  
  constructor(private http:HttpClient ){}

  postEventdate(obj:any){
    return this.http.post<any[]>("http://localhost:3000/events",obj)
  }
  geEventdata(){
    return this.http.get<any[]>("http://localhost:3000/events")
  }

  postMeetingdetails(obj:any){
    return this.http.post<any[]>("http://localhost:3000/meetings",obj)
  }
  getMeetingdata(){
    return this.http.get<any[]>("http://localhost:3000/meetings")
  }
  getDeletemeeting(id:string){
    return this.http.delete("http://localhost:3000/meetings/"+id)
  }
}
