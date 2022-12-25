import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';
import GenreOrCategoryReducer from '../Features/currentGenreOrCategory';
import userReducer from '../Features/auth';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: GenreOrCategoryReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});
