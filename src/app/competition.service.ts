import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  currentCompetition:any;

  constructor(public http:HttpClient) { }

  getCompetition(){
    return this.http.get("http://localhost:8080/competition");
  }
}
