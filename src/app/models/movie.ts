export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  status: string;
  genres: Genre[];
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface MovieSchema {
  page: number;
  results: Movie[];
  dates: Dates;
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieVideoSchema {
  id: number;
  results: MovieVideo[];
}

export interface MovieVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface MovieImagesSchema {
  backdrops: {
    file_path: string;
  }[];
}

export interface MovieCreditsSchema {
  cast: MovieCredits[];
}

export interface MovieCredits {
  name: string;
  profile_path: string;
}