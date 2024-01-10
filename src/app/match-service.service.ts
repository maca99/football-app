import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchServiceService {

  private apiUrl = "http://localhost:8080/";

  constructor(public http:HttpClient) { }

  getDayMatchesById(id:number){
    const url = `${this.apiUrl}competition/${id}/daymatch`;
    return this.http.get(url);
  }

  getMatchById(id:number){
    const url = `${this.apiUrl}match/${id}`;
    return this.http.get(url);
  }

}
