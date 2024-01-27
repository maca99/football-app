import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private _storage: Storage | null = null;
  private apiUrl = "http://localhost:8080/";

  constructor(public http: HttpClient,private storage: Storage) {
    this.init();
   }

   async init(){
    try{
      const storage = await this.storage.create();
      this._storage = storage;
    } catch (error) {
      console.error('Errore durante l\'inizializzazione del servizio di archiviazione:', error);
    }
   }

    getAllTeams() {
      return this.http.get("http://localhost:8080/teams");
  }
  
   setFavouriteTeam(teamID:number){
    this._storage?.remove('Favourite');
    this._storage?.set('Favourite', teamID);
   }

   getFavouriteTeam() {
    const id = this._storage?.get('Favourite') || 1 ;
    const url = `${this.apiUrl}team/${id}`;
    return this.http.get(url);
  }
  


}
