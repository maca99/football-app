import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';
import { TeamService } from 'src/app/team.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

  private team:any;

  constructor(private teamService: TeamService,private storage:StorageService,private router:Router) {}



async ngOnInit() {
  try {
    let id:number = parseInt(await this.storage.get('Favourite'));
    
    this.teamService.getFavouriteTeam(id).subscribe((data) => {
      this.team = data;
    });
    
  } catch (error) {
    this.router.navigate(['/team']);
  }
}

}
