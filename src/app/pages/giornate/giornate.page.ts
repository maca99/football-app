import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router) { }


  ngOnInit(){
  
    this.competition=this.competitionservice.competition;
    this.matchservice.getDayMatchesById(this.competition.id).subscribe((days)=>{
      this.days=days;
      console.log(days);
    });
    
  }

  goToMatch(match:any){
    this.router.navigate(['/risultato/'+  match.id]);
  }


}
