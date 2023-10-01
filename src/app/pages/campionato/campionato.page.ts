import { Component, OnInit } from '@angular/core';
import { CompetitionService } from 'src/app/competition.service';
import { ActivatedRoute} from '@angular/router'; // Importa Router
import { NavController } from '@ionic/angular';

@Component({
  selector: 'campionato-campionato',
  templateUrl: './campionato.page.html',
  styleUrls: ['./campionato.page.scss'],
})
export class CampionatoPage implements OnInit {

  campionato: any;

  constructor(
    private competitionservice: CompetitionService,
    private route: ActivatedRoute,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
    // Ottieni l'ID dall'URL
    const id = this.route.snapshot.params.id;

    // Cerca il campionato utilizzando il servizio
    this.competitionservice.getCompetitionById(id).subscribe((campionato) => {
      this.campionato = campionato;
    });
    
  }


}