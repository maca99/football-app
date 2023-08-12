import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(public http:HttpClient) {}

  getCompetitionForZone(id:number){
    return this.http.get('http://localhost:8080/competition/country/'+id);
  }

  getZone(){
    return this.http.get('http://localhost:8080/zone');
  }

 
}
