import { Component, OnInit } from '@angular/core';
import { CompetitionService } from 'src/app/competition.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettaglio-competizione',
  templateUrl: './dettaglio-competizione.page.html',
  styleUrls: ['./dettaglio-competizione.page.scss'],
})
export class DettaglioCompetizionePage implements OnInit {

  competizione: any;

  constructor(private competitionService: CompetitionService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.competitionService.getCompetition(id).subscribe(
      (data) => {
        this.competizione = data;
        console.log(this.competizione);
      },
      (error) => {
        console.error('Errore nel recuperare la competizione: ', error);
      }
    );

  }
}
