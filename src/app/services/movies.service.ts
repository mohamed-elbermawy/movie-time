import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private _http: HttpClient) {}

  getMovies() {
    return this._http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=ffcbc3a6bba038f9d3774f25bc19a239');
  }
}
