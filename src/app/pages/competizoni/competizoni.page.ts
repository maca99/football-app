import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competizoni',
  templateUrl: './competizoni.page.html',
  styleUrls: ['./competizoni.page.scss'],
})
export class CompetizoniPage {

  constructor(private router: Router) { }

  goToCompetition(id:number){
    this.router.navigate(['dettaglio-competizione',id]);
  }

}
