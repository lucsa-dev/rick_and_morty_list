import { ResultCharacter } from "@/types/characters.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE: ResultCharacter[] = [];

const sliceFavorites = createSlice({
  name: "favorites",
  initialState: INITIAL_STATE,
  reducers: {
    addFavorite(state, { payload }: PayloadAction<ResultCharacter>) {
      return [...state, payload];
    },
    removeFavorite(state, { payload }: PayloadAction<ResultCharacter>) {
      return state.filter((item) => item.id !== payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = sliceFavorites.actions;
export default sliceFavorites.reducer;

export const selectFavorites = (state: any) =>
  state.favorites as ResultCharacter[];
