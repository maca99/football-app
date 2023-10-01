import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  
  current:any;
  private apiUrl = "http://localhost:8080/";

  constructor(public http:HttpClient) {}

    getAllCompetition(){
      const url = `${this.apiUrl}competitions`;
      return this.http.get(url);
    }

    getCompetitionById(id:number){
      const url = `${this.apiUrl}competition/${id}`;
      return this.http.get(url);
    }


  }
    

