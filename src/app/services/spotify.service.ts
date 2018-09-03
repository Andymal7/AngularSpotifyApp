import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) { }

  getQuery(query: string) {

    //this access token that Spotify gives us expires with the time

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAva9PitQd5lYEEnGL4X3kCGc292sKLSUP3PdFG8MXiHReTBjw1C3oCAiPrLt59r06CgjirtcyC-INRQIVdWjhqWytYDZ3vGH-SEy1QoP3iOuoqUjk7lDzuCdQLnVt63qkSsTnKXIkVDk-JWGklhRnnSKNN0XmARA'
    })

    const url = `https://api.spotify.com/v1/${ query }`;

    return this.http.get(url, {headers})
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
                .pipe(map( data => {
                  return data['albums'].items;
                }));

  }

  getArtists(elemento:string){

    return this.getQuery(`search?q=${ elemento }&type=artist&limit=15`)
                .pipe(map( data => data['artists'].items ));
  }

  getArtist(id:string){

    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe(map( data => data['tracks'] ));
  }
}
