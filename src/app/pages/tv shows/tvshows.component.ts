import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe } from 'rxjs';
import { first } from 'rxjs/operators';
import { GeneralService } from '../../shared/services/general.service';
import { Movie, TVShowsMovie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TVShowsComponent implements OnInit {
  tvshowsmovies: Movie[] = [];
  NumberOfItemsInPage: number = 20;
  NumberOfItems: number = 1000;
  genreID: string = '';
  searchValue: string | null = null;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    private generalService: GeneralService
  ) {
    this.route.params.pipe(first()).subscribe(({ genreid }) => {
      this.genreID = genreid;
    });
  }

  ngOnInit(): void {
    if (this.genreID) {
      this.getTVShowsGenre(this.genreID, 1);
    } else {
      this.getTVShowsMovies('popular', 1);
    }
  }

  getTVShowsMovies(type: string, page: number, searchValue?: string) {
    this.movieService.getTVShowsMovies(type, page, searchValue).subscribe((res) => {
      console.log(res, 'rws');
      this.tvshowsmovies = this.generalService.mapTVShowsToMovies(res);
    });
  }

  getTVShowsGenre(genreID: string, page: number) {
    this.movieService.getTVShowsGenre(genreID, page).subscribe((res) => {
      this.tvshowsmovies = this.generalService.mapTVShowsToMovies(res);
    });
  }

  paginate(event: any) {
    if (this.genreID) {
      this.getTVShowsGenre(this.genreID, event.page + 1);
    } else {
      if (this.searchValue) {
        this.getTVShowsMovies('popular', event.page + 1, this.searchValue);
      } else {
        this.getTVShowsMovies('popular', event.page + 1);
      }
    }
  }

  onChangeInput() {
    if (this.searchValue) {
      this.getTVShowsMovies('popular', 1, this.searchValue);
    }
  }
}
