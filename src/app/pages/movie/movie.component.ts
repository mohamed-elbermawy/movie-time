import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../../services/movies.service';
import { Movie, MovieVideo, MovieImagesSchema, MovieCredits } from './../../models/movie';
import {IMAGE_SIZES} from './../../constants/image-sizes'
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  imageSizes = IMAGE_SIZES;
  id: string = '';
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImagesSchema | null = null;
  movieCast: MovieCredits[] = [];
  movies: Movie[] = [];
  NumberOfItemsInPage: number = 6;
  NumberOfItems: number = 36;

  constructor(private route: ActivatedRoute, private _moviesService: MoviesService) {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.id = id;
    });
  }

  ngOnInit(): void {
    this.getMovie(this.id);
    this.getMovieVideos(this.id);
    this.getMovieImages(this.id);
    this.getMovieCredits(this.id);
    this.getSimilarMovies(this.id);
  }

  getMovie(id: string) {
    this._moviesService.getMovie(id).subscribe((res) => {
      this.movie = res;
    });
  }

  getMovieVideos(id: string) {
    this._moviesService.getMovieVideos(id).subscribe((res) => {
      this.movieVideos = res;
    });
  }

  getMovieImages(id: string) {
    this._moviesService.getMovieImages(id).subscribe((res) => {
      this.movieImages = res;
    });
  }

  getMovieCredits(id: string) {
    this._moviesService.getMovieCredits(id).subscribe((res) => {
      this.movieCast = res.cast.slice(0, 20);
    });
  }

  getSimilarMovies(id: string) {
    this._moviesService.getSimilarMovies(id).subscribe((res) => {
      this.movies = res;
    });
  }

  paginate(event: any) {
    this.getSimilarMovies(event.page + 1);
  }
}
