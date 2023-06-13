import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.page.html',
  styleUrls: ['./list-news.page.scss'],
})
export class ListNewsPage implements OnInit {

  articolo:any;

  constructor(private newsService : NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService
    .getNews()
    .subscribe(data => 
        {console.log(data);
        this.articolo=data;
        });
    
  }

  goToNews(articolo){
    this.newsService.currentNews=articolo;
    this.router.navigate(['/news']);
  }

}
