import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionService } from 'src/app/competition.service';
import { MatchServiceService } from 'src/app/match-service.service';

@Component({
  selector: 'app-giornata',
  templateUrl: './giornate.page.html',
  styleUrls: ['./giornate.page.scss'],
})
export class GiornatePage implements OnInit {

  competition:any;
  days:any
  matches:any;


  constructor(
    private competitionservice: CompetitionService,
    private matchservice: MatchServiceService,
    private route: ActivatedRoute) { }


  ngOnInit(){
  
    this.competition=this.competitionservice.current;
    this.matchservice.getDayMatchesById(this.competition.id).subscribe((matchDays) => {
      this.days = matchDays;
    });
    
  }


}
