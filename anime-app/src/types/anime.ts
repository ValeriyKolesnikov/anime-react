// src/types/anime.ts
export interface Anime {
    id: number;
    title: string;
    imageUrl: string;
    score: number;
    scored_by: number;
    genres: Genre[];
    producers: Producer[];
    episodes: number;
  }
  
  export interface Genre {
    mal_id: number;
    name: string;
    url: string;
  }
  
  export interface Producer {
    mal_id: number;
    name: string;
    url: string;
  }
  