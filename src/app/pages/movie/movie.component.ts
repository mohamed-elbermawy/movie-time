import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../../services/movies.service';
import { Movie } from './../../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  id: string = '';
  movie: Movie | null = null;
  constructor(private route: ActivatedRoute, private _moviesService: MoviesService) {
    this.route.params.subscribe(({ id }) => {
      this.id = id;
      this.getMovie(this.id);
    });
  }

  ngOnInit(): void {}

  getMovie(id: string) {
    this._moviesService.getMovie(id).subscribe((res) => {
      this.movie = res;
    });
  }
}
