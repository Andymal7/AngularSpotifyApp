import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public artistas: any[] = [];
  public loading: boolean = false;

  constructor(
    private spotify: SpotifyService
  ) { }

  ngOnInit() {

  }

  search(elemento: string) {
    this.loading = true;
    this.spotify.getArtists(elemento).subscribe(
      (data:any)=>{
        this.loading = false;
        this.artistas = data;
      })
  }
}
