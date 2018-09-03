import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  public artist : {};
  public tracks : any[] = [];
  public loading : boolean;

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService
  ) { }

  ngOnInit() {
    this.router.params.subscribe( params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
      this.loading = true;
    })
  }

  getArtist(id) {
    this.loading = true;

    this.spotify.getArtist(id).subscribe(
      artist => {
        this.artist = artist;
        this.loading = false;
      });
  }

  getTopTracks(id) {
    this.spotify.getTopTracks(id).subscribe(
      tracks => {
        this.tracks= tracks;
        console.log(this.tracks);
      }
    )
  }

}
