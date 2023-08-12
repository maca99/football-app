import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from 'src/app/competition.service'; 

@Component({
  selector: 'app-competizoni',
  templateUrl: './zone.page.html',
  styleUrls: ['./zone.page.scss'],
})
export class ZonePage implements OnInit {

  zone:any;

  constructor(private service: CompetitionService,private router: Router) { }

  ngOnInit() {
    this.service
    .getZone()
    .subscribe(data => 
        {console.log(data);
        this.zone=data;
        });
    
  }

  goToCompetition(id:number){
    this.router.navigate(['dettaglio-competizione',id]);
  }

}
