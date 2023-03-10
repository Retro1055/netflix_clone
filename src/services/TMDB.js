import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApikey = process.env.REACT_APP_TMDB_API_KEY;
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApikey}`,
    }),
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApikey}`;
        }
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApikey}`;
        }
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApikey}`;
        }
        return `movie/popular?page=${page}&api_key=${tmdbApikey}`;
      },
    }),
    getMovie: builder.query({
      query: (id) => `/movie/${id}?api_key=${tmdbApikey}&append_to_response=videos,credits`,
    }),
    getRecommendations: builder.query({
      query: ({movieId, list}) => `/movie/${movieId}/${list}?api_key=${tmdbApikey}`,
    }),
    getActor: builder.query({
      query: (id) => `/person/${id}?api_key=${tmdbApikey}`,
    }),
    getMoviesByActorId: builder.query({
      query: ({id, page}) => `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApikey}`,
    }),
  }),
});

export const {
  useGetMoviesQuery, useGetGenresQuery, useGetMovieQuery,useGetRecommendationsQuery,useGetActorQuery,useGetMoviesByActorIdQuery
} = tmdbApi;
