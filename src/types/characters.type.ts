export type ReqRickAndMortyApi<T> = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: T[];
};

export type ResultCharacters = {
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
