import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Masterservice {
  upcomingmeeting = new BehaviorSubject<any[]>([]);
  todaycomingmeeting = new BehaviorSubject<any[]>([]);
<<<<<<< HEAD
  ApiURL="http://localhost:3001/";
=======
>>>>>>> 7c31cd6e57f54ec39d971b6d457b46632749f078
  
  constructor(private http:HttpClient ){}

  postEventdate(obj:any){
<<<<<<< HEAD
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
=======
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
>>>>>>> 7c31cd6e57f54ec39d971b6d457b46632749f078
  }
}
