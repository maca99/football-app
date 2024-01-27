import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private apiUrl = "http://localhost:8080/";

  constructor(public http: HttpClient) {}

    getAllTeams() {
      return this.http.get("http://localhost:8080/teams");
  } 

    getFavouriteTeam(id:number) {
    const url = `${this.apiUrl}team/${id}`;
    return this.http.get(url);
  }
  


}
