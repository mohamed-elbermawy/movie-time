import { Component, OnInit } from '@angular/core';
import { Movie } from './../../models/movie';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  NumberOfItemsInPage: number = 20;
  NumberOfItems: number = 1000;

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.getMovies('top_rated', 1);
  }

  getMovies(type: string, page: number) {
    this.movieService.SearchMovie(type, page).subscribe((res) => {
      this.movies = res;
    });
  }

  paginate(event: any){
    this.getMovies('top_rated', event.page + 1);
  }
}
