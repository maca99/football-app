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
    const id = await this.storage.get('Favourite');
    if (id) {
      this.teamService.getFavouriteTeam(id).subscribe(data => {
        console.log(data);
        this.team = data;
      });
    } else {
      // id è null, reindirizza a 'team'
      this.router.navigate(['/team']);
    }
  }
}
