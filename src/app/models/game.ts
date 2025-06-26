export interface Game {
  id: number;
  title: string;
  price: number;
  image_url: string;
  description: string;
  platform: string;
  genre: string;
  multiplayer: boolean;
  storyMode: boolean;
  coop: boolean;
  releaseYear: number;
  developer: string;
  online: boolean;
  freeToPlay: boolean;
  crossplay: boolean;
  singlePlayer: boolean;
  localMultiplayer: boolean;
  rating: number;
  language: string[];
  
  dlcAvailable: boolean;
  vrSupport: boolean;
  achievements: boolean;
  mods: boolean;
  franchise:string;
}