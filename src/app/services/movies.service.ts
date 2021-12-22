import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { MovieSchema } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseURl = environment.baseURl;
  api_Key = environment.api_Key;

  constructor(private _http: HttpClient) {}

  getMovies(type: string, count: number = 12) {
    return this._http
      .get<MovieSchema>(`${this.baseURl}/movie/${type}?api_key=${this.api_Key}`)
      .pipe(map((res) => res.results.slice(0, count)));
  }
}
