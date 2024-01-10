import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchServiceService } from 'src/app/match-service.service';

@Component({
  selector: 'app-risultato',
  templateUrl: './risultato.page.html',
  styleUrls: ['./risultato.page.scss'],
})
export class RisultatoPage implements OnInit {

  private match:any;

  constructor(private matchservice: MatchServiceService,private route: ActivatedRoute,) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.matchservice.getMatchById(id).subscribe((match) => {
      this.match = match;
      console.log(match);
    });
  }

}
