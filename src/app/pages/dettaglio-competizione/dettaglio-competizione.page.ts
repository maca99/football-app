import { Component, OnInit } from '@angular/core';
import { CompetitionService } from 'src/app/competition.service';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dettaglio-competizione',
  templateUrl: './dettaglio-competizione.page.html',
  styleUrls: ['./dettaglio-competizione.page.scss'],
})
export class DettaglioCompetizionePage implements OnInit {

  competizioni: any;

  constructor(
    private competitionService: CompetitionService,
    private route: ActivatedRoute,
     private router: Router) 
     { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.competitionService.getCompetitionForZone(id).subscribe(
      (data) => {
        this.competizioni = data;
        console.log(this.competizioni);
      },
      (error) => {
        console.error('Errore nel recuperare la competizione: ', error);
      }
    );
  }

  goToCampionato(){
    this.router.navigate(['campionato']);
  }
}
