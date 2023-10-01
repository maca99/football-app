import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  currentNews: any;

  constructor(public http: HttpClient) { }

  getNews() {
    return this.http.get('http://localhost:8080/news');
  }

}
