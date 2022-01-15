import { Injectable } from '@angular/core';
import { Movie, TVShowsMovie } from './../../models/movie';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  constructor() {}

  mapTVShowsToMovies(res: TVShowsMovie[]): Movie[] {
    let mappedArr: Movie[] = [];
    res.forEach((item) => {
      mappedArr.push({
        backdrop_path: item.backdrop_path,
        genre_ids: item.genre_ids,
        id: item.id,
        original_language: item.original_language,
        original_title: item.original_name,
        overview: item.overview,
        popularity: item.popularity,
        poster_path: item.poster_path,
        title: item.name,
        vote_average: item.vote_average,
        vote_count: item.vote_count,
        release_date: item.first_air_date,
        adult: false,
        video: false,
        revenue: 0,
        runtime: 0,
        status: '',
        genres: []
      });
    });
    return mappedArr;
  }
}
