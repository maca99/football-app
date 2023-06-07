import { Injectable, NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http: HttpClient) { }

  getAreas(){
    const httpOptions = {
    headers: new HttpHeaders({
      'X-Auth-Token': '410da25b7e6c4a6f85d79a460abd6da0'
    })
  };
    return this.http.get('https://api.football-data.org/v4/matches');
  }
}
