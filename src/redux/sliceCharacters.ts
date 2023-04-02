import { ReqRickAndMortyApi, ResultCharacter } from "@/types/characters.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE: ReqRickAndMortyApi<ResultCharacter> = {
  info: {
    count: 0,
    pages: 0,
    next: "",
    prev: "",
  },
  results: [],
};

const sliceCharacters = createSlice({
  name: "characters",
  initialState: INITIAL_STATE,
  reducers: {
    setCharacters(
      state,
      { payload }: PayloadAction<ReqRickAndMortyApi<ResultCharacter>>
    ) {
      return payload;
    },
  },
});

export const { setCharacters } = sliceCharacters.actions;
export default sliceCharacters.reducer;

export const selectCharacters = (state: any) =>
  state.characters as ReqRickAndMortyApi<ResultCharacter>;
