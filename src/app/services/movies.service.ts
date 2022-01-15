import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {
  MovieSchema,
  MovieVideoSchema,
  Movie,
  MovieImagesSchema,
  MovieCreditsSchema,
  GenresScema,
  TVShowsSchema
} from './../models/movie';

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

  SearchMovie(type: string, page: number, searchValue?: string) {
    const uri = searchValue ? '/search/movie' : `/movie/${type}`;
    return this._http
      .get<MovieSchema>(`${this.baseURl}${uri}?api_key=${this.api_Key}&page=${page}&query=${searchValue}`)
      .pipe(map((res) => res.results));
  }

  getMovie(id: string) {
    return this._http.get<Movie>(`${this.baseURl}/movie/${id}?api_key=${this.api_Key}`).pipe(map((res) => res));
  }

  getMovieVideos(id: string) {
    return this._http
      .get<MovieVideoSchema>(`${this.baseURl}/movie/${id}/videos?api_key=${this.api_Key}`)
      .pipe(map((res) => res.results));
  }

  getMovieImages(id: string) {
    return this._http
      .get<MovieImagesSchema>(`${this.baseURl}/movie/${id}/images?api_key=${this.api_Key}`)
      .pipe(map((res) => res));
  }

  getMovieCredits(id: string) {
    return this._http
      .get<MovieCreditsSchema>(`${this.baseURl}/movie/${id}/credits?api_key=${this.api_Key}`)
      .pipe(map((res) => res));
  }

  getSimilarMovies(id: string) {
    return this._http
      .get<MovieSchema>(`${this.baseURl}/movie/${id}/similar?api_key=${this.api_Key}`)
      .pipe(map((res) => res.results.slice(0, 6)));
  }

  getMoviesGenres() {
    return this._http
      .get<GenresScema>(`${this.baseURl}/genre/movie/list?api_key=${this.api_Key}`)
      .pipe(map((res) => res));
  }

  getMoviesGenre(genreID: string, page: number = 1) {
    return this._http
      .get<MovieSchema>(`${this.baseURl}/discover/movie?with_genres=${genreID}&api_key=${this.api_Key}&page=${page}`)
      .pipe(map((res) => res.results));
  }

  getTVShowsGenres() {
    return this._http.get<GenresScema>(`${this.baseURl}/genre/tv/list?api_key=${this.api_Key}`).pipe(map((res) => res));
  }

  getTVShowsGenre(genreID: string, page: number = 1) {
    return this._http
      .get<TVShowsSchema>(`${this.baseURl}/discover/tv?with_genres=${genreID}&api_key=${this.api_Key}&page=${page}`)
      .pipe(map((res) => res.results));
  }

  getTVShowsMovies(type: string, page: number, searchValue?: string) {
    const uri = searchValue ? '/search/tv' : `/tv/${type}`;
    return this._http
      .get<TVShowsSchema>(`${this.baseURl}${uri}?api_key=${this.api_Key}&page=${page}&query=${searchValue}`)
      .pipe(map((res) => res.results));
  }
}
