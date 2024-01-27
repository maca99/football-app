import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { TeamService } from 'src/app/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  private teams:any;

  constructor(private teamService: TeamService,private router: Router) {}

  ngOnInit() {
    this.teamService.getAllTeams().subscribe(data=>{console.log(data);
      this.teams=data;
      })
  }

  setFavourite(id:number){
    this.teamService.setFavouriteTeam(id);
    this.router.navigate(["favourite"]);
  }

}
