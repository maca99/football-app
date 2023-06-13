import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  articolo:any;

  constructor(private newsService : NewsService) { }

  ngOnInit() {
    this.articolo=this.newsService.currentNews;
  }

}
