import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/team.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

  private team:any;

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.team = this.teamService.getFavouriteTeam().subscribe(data=>{console.log(data);
      this.team=data;
      });
  }

}
