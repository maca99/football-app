import { Component, OnInit } from '@angular/core';
import { CompetitionService } from 'src/app/competition.service';

@Component({
  selector: 'app-marcatori',
  templateUrl: './marcatori.page.html',
  styleUrls: ['./marcatori.page.scss'],
})
export class MarcatoriPage implements OnInit {

  private competition:any;
  private ranking:any;

  constructor(private competitionservice: CompetitionService) { }

  ngOnInit() {
    this.competition=this.competitionservice.competition;
    this.competitionservice.getTopScorers(this.competition).subscribe((ranking) => {
      this.ranking = ranking;
      console.log(ranking);
    });
  }

}
