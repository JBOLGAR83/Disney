import { Personaje } from './personaje';

export class PersonajeImpl implements Personaje {
  films: [] = [];
  shortFilms: [] = [];
  tvShows: [] = [];
  videoGames: [] = [];
  parkAttractions: [] = [];
  allies: [] = [];
  enemies: [] = [];
  _id: string = '';
  name: string = '';
  imageUrl: string = '';
  url: string = '';

  constructor(
    films: [],
    shortFilms: [],
    tvShows: [],
    videoGames: [],
    parkAttractions: [],
    allies: [],
    enemies: any,
    _id: any,
    imageUrl: any,
    url: any
  ) {
    this.films = films;
    this.shortFilms = shortFilms;
    this.tvShows = tvShows;
    this.videoGames = videoGames;
    this.parkAttractions = parkAttractions;
    this.allies = allies;
    this.enemies = enemies;
    this._id = this.getId(url);
    this.imageUrl = imageUrl;
    this.url = url;
  }

  getId(url: string): string {
    url = url.slice(0, url.length - 1);
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }
}
