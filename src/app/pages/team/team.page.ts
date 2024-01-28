import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';
import { TeamService } from 'src/app/team.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  private teams:any;

  constructor(private storageService : StorageService,private teamService:TeamService,private router: Router) {}

  ngOnInit() {
    this.teamService.getAllTeams().subscribe(data=>{console.log(data);
      this.teams=data;
      })
  }

  async setFavourite(id:any){
    let teamID = parseInt(id);
    await this.storageService.set('Favourite',teamID);
    this.router.navigate(["favourite"]);
  }

}
