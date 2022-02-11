import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTrendingGifs(){
    return this.http.get(`https://giphy.com/trending-gifs?api_key=%${environment.giphyApiKey}&limit=50`);
  }
}
