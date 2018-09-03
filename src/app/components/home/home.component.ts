import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public newSongs: any[] = [];
  public loading: boolean;
  public error: boolean;
  public errorMessage: string;

  constructor(
    private spotify: SpotifyService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases().subscribe(
      (data:any) => {
        this.newSongs = data;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.error = true;
        this.errorMessage = error.error.error.message;
      }
    );
  }

}
