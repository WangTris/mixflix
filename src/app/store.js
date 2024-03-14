import { configureStore } from "@reduxjs/toolkit";

// Import your API slice
import { tmdbApi } from "../services/TMDB";

export default configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
