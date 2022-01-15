import { Component, OnInit } from '@angular/core';
import { Genre } from './../../models/movie';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  MoviesGenres: Genre[] = [];
  TVShowsGenres: Genre[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMoviesGenres();
    this.getTVShowsGenres();
  }

  getMoviesGenres() {
    this.moviesService.getMoviesGenres().subscribe((res) => {
      this.MoviesGenres = res.genres;
    });
  }

  getTVShowsGenres() {
    this.moviesService.getTVShowsGenres().subscribe((res) => {
      this.TVShowsGenres = res.genres;
    });
  }
}
