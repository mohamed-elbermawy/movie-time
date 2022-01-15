import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe } from 'rxjs';
import { first } from 'rxjs/operators';
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
  genreID: string = '';
  searchValue: string | null = null;

  constructor(private movieService: MoviesService, private route: ActivatedRoute) {
    this.route.params.pipe(first()).subscribe(({ genreid }) => {
      this.genreID = genreid;
    });
  }

  ngOnInit(): void {
    if (this.genreID == '') {
      this.getMovies('top_rated', 1);
    } else {
      this.getMoviesGenre(this.genreID, 1);
    }
  }

  getMovies(type: string, page: number, searchValue?: string) {
    this.movieService.SearchMovie(type, page, searchValue).subscribe((res) => {
      this.movies = res;
    });
  }

  getMoviesGenre(genreID: string, page: number) {
    this.movieService.getMoviesGenre(genreID, page).subscribe((res) => {
      this.movies = res;
    });
  }

  paginate(event: any) {
    if (this.genreID == '') {
      this.getMovies('top_rated', event.page + 1);
    } else {
      if (this.searchValue) {
        this.getMovies('top_rated', event.page + 1, this.searchValue);
      } else {
        this.getMoviesGenre(this.genreID, event.page + 1);
      }
    }
  }

  onChangeInput(){
    if(this.searchValue){
      this.getMovies('top_rated', 1, this.searchValue);
    }
  }
}
