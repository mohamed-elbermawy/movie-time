import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any = [];

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    this._moviesService.getMovies().subscribe((res: any) => {
      this.movies = res.results;
    });
  }
}
