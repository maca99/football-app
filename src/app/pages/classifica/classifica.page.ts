import { Component, OnInit } from '@angular/core';
import { CompetitionService } from 'src/app/competition.service';

@Component({
  selector: 'app-classifica',
  templateUrl: './classifica.page.html',
  styleUrls: ['./classifica.page.scss'],
})
export class ClassificaPage implements OnInit {

  private competition:any;
  private ranking:any;

  constructor(
    private competitionservice: CompetitionService
  ) { }

  ngOnInit() {
    this.competition=this.competitionservice.competition;
    this.competitionservice.getRankingCompetition(this.competition).subscribe((ranking) => {
      this.ranking = ranking;
      console.log(ranking);
    });
  }

}
