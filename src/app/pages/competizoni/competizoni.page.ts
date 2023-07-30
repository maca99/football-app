import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from 'src/app/competition.service';

@Component({
  selector: 'app-competizoni',
  templateUrl: './competizoni.page.html',
  styleUrls: ['./competizoni.page.scss'],
})
export class CompetizoniPage implements OnInit {

  competizione:any;

  constructor(private competitionService : CompetitionService,private router: Router) { }

  ngOnInit() {
    this.competitionService
    .getCompetition()
        .subscribe(data =>
          {console.log(data);
            this.competizione=data;
          }
        );
  }

  goToCompetition(competizione){
    this.competitionService.currentCompetition=competizione;
    this.router.navigate(['/competizione']);
  }

}
