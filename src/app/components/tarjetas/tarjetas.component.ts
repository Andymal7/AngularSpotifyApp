import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  private artistId : any;
  @Input() items: any[] = [];

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  showArtist(item){
    if (item.type == 'artist') {
      this.artistId = item.id;
    }else {
      this.artistId = item.artists[0].id;
    }

    this.router.navigate(['/artist', this.artistId])
  }
}
