import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';
import { Movie, MovieSchema } from './../../models/movie';
import { GeneralService } from '../../shared/services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  top_ratedMovies: Movie[] = [];
  now_playingMovies: Movie[] = [];
  popularTVShowsMovies: Movie[] = [];

  popularMoviesTitle: string = 'Popular Movies';
  Top_RatedMoviesTitle: string = 'Top Rated Movies';
  Now_PlayingMoviesTitle: string = 'Now Playing Movies';
  PopularTVShowsMoviesTitle: string = 'Popular TV Shows Movies';

  constructor(private _moviesService: MoviesService, private generalService: GeneralService) {}

  ngOnInit(): void {
    this._moviesService.getMovies('upcoming').subscribe((movies: Movie[]) => {
      this.upcomingMovies = movies;
    });
    this._moviesService.getMovies('popular').subscribe((movies: Movie[]) => {
      this.popularMovies = movies;
    });
    this._moviesService.getMovies('top_rated').subscribe((movies: Movie[]) => {
      this.top_ratedMovies = movies;
    });
    this._moviesService.getMovies('now_playing').subscribe((movies: Movie[]) => {
      this.now_playingMovies = movies;
    });
    this._moviesService.getTVShowspopularMovies('popular').subscribe((movies) => {
      this.now_playingMovies = this.generalService.mapTVShowsToMovies(movies);
    });
  }
}
