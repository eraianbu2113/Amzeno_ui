import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Masterservice {
  constructor(private http:HttpClient ){}

  postEventdate(obj:any){
    return this.http.post<any[]>("http://localhost:300/events",obj)
  }
  geEventdata(){
    return this.http.get<any[]>("http://localhost:300/events")
  }

  postMeetingdetails(obj:any){
    return this.http.post<any[]>("http://localhost:300/meetings",obj)
  }
  getMeetingdata(){
    return this.http.get<any[]>("http://localhost:300/meetings")
  }
}
