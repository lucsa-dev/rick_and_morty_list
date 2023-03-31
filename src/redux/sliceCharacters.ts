import { CharacterProps } from "@/components/characters/characters.type";
import { ResultCharacters } from "@/types/characters.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE: ResultCharacters[] = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "unknown",
      url: "",
    },
    location: {
      name: "Worldender's lair",
      url: "https://rickandmortyapi.com/api/location/4",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/25"],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  },
];

const sliceCharacters = createSlice({
  name: "characters",
  initialState: INITIAL_STATE,
  reducers: {
    setCharacters(state, { payload }: PayloadAction<ResultCharacters[]>) {
      return payload;
    },
  },
});

export const { setCharacters } = sliceCharacters.actions;
export default sliceCharacters.reducer;

export const selectCharacters = (state: any) =>
  state.characters as ResultCharacters[];
