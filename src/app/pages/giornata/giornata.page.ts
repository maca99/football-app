import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionService } from 'src/app/competition.service';
import { MatchServiceService } from 'src/app/match-service.service';

@Component({
  selector: 'app-giornata',
  templateUrl: './giornata.page.html',
  styleUrls: ['./giornata.page.scss'],
})
export class GiornataPage implements OnInit {

  competition:any;
  matchDays

  constructor(
    private competitionservice: CompetitionService,
    private matchservice: MatchServiceService,
    private route: ActivatedRoute) { }


  ngOnInit(){
  
    this.competition=this.competitionservice.current;
   /* this.matchservice.getDayMatchesById(this.competition).subscribe((matchDays) => {
      this.matchDays = matchDays;
    });*/
    console.log(this.competition.id);
  }


}
