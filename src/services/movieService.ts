import axios from "axios";
import type { Movie } from "../types/movie";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODA4ZWEyM2RhZTU1NjNmNjVhMWM0YTcxODU2OTM1MCIsIm5iZiI6MTc4MjU3NTkyNi4yOTMsInN1YiI6IjZhM2ZmMzM2NjQwMTRiY2M0YWIwODgxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2fv0tbj97I8hxwZF8rLXv3LuS6SjXoeELJZYIt4RNuU";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${TMDB_TOKEN}`;

interface MoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<MoviesResponse>("/search/movie", {
    params: { query },
  });

  return response.data.results;
};
