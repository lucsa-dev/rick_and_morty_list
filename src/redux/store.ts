import { configureStore } from "@reduxjs/toolkit";
import sliceCharacters from "./sliceCharacters";

const store = configureStore({
  reducer: {
    characters: sliceCharacters,
  },
});

export default store;
