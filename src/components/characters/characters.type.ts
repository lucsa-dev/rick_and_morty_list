export type CharacterProps = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginProps;
  location: LocationProps;
  image: string;
  episode: EpisodeProps[];
  url: string;
  created: string;
};

export type InfoProps = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

export type OriginProps = {};

export type LocationProps = {};

export type EpisodeProps = {};
