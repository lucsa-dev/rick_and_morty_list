export type ReqRickAndMortyApi<T> = {
  info: info;
  results: T[];
};

export type ResultCharacter = {
  id: number;
  name: string;
  status: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  type: string;
  image: string;
  gender: string;
  episode: string[];
  url: string;
  created: string;
  location: {
    name: string;
    url: string;
  };
};

export type info = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};
