import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  
  current:any;
  teams:any;

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

    getTeamByCompetition(competition:any){
      const url = `${this.apiUrl}competition/${competition.id}/teams`;
      this.teams = this.http.get(url);
  
      return this.teams;
    }
    getRankingCompetition(competition:any){
      const url = `${this.apiUrl}competition/${competition.id}/ranking`;
      return this.http.get(url);
    }
    getTopScorers(competition:any){
      const url = `${this.apiUrl}competition/${competition.id}/topscorers`;
      return this.http.get(url);
    }


  }
    

