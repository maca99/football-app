import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-competizioni',
  templateUrl: './competizioni.page.html',
  styleUrls: ['./competizioni.page.scss'],
})
export class CompetizioniPage implements OnInit {

  constructor(public api:ApiService ) { }

  viewCompetitions(){
    this.api.getAreas().subscribe(result=>{
      console.log(result);
    });
  }

  ngOnInit(): void {
    
  }

}
