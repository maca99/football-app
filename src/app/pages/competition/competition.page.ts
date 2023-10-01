import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from 'src/app/competition.service'; 

@Component({
  selector: 'app-competizoni',
  templateUrl: './competition.page.html',
  styleUrls: ['./competition.page.scss'],
})
export class CompetitionPage implements OnInit {

  competitions: any;

  constructor(private competitionservice: CompetitionService,private router: Router) { }

  ngOnInit() {
    this.competitionservice
    .getAllCompetition()
    .subscribe(data=>{console.log(data);
      this.competitions=data;
      })
    this.competitionservice.current
  }

  goToCompetition(competition){
    this.competitionservice.current=competition;
    this.router.navigate(['campionato',competition.id]);
  }


}
