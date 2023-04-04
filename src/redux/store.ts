import { configureStore } from "@reduxjs/toolkit";
import sliceCharacters from "./sliceCharacters";
import sliceFavorite from "./sliceFavorite";

const store = configureStore({
  reducer: {
    characters: sliceCharacters,
    favorites: sliceFavorite,
  },
});

export default store;
