import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';
import { Movie, MovieSchema } from './../../models/movie';

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

  popularMoviesTitle: string = 'Popular Movies';
  Top_RatedMoviesTitle: string = 'Top Rated Movies';
  Now_PlayingMoviesTitle: string = 'Now Playing Movies';

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    this._moviesService.getMovies('upcoming').subscribe((res: MovieSchema) => {
      this.upcomingMovies = res.results;
    });
    this._moviesService.getMovies('popular').subscribe((res: MovieSchema) => {
      this.popularMovies = res.results;
    });
    this._moviesService.getMovies('top_rated').subscribe((res: MovieSchema) => {
      this.top_ratedMovies = res.results;
    });
    this._moviesService.getMovies('now_playing').subscribe((res: MovieSchema) => {
      this.now_playingMovies = res.results;
    });
  }
}
