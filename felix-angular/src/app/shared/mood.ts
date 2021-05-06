import {Category} from './category';
import {Music} from './music';
import {Tvserie} from './tvserie';
import {Movie} from './movie';
import {Fourth} from './fourth';
import {Game} from './game';
export class Mood {
  id: number;
  color: string;
  image: string;
  cols: number;
  rows: number;
  text: string;
  quote: string;
  route: string;
  categories: Category[];
  musics: Music[];
  engSeries: Tvserie[];
  hinSeries: Tvserie[];
  korSeries: Tvserie[];
  engMovies: Movie[];
  hinMovies: Movie[];
  punMovies: Movie[];
  fourth: Fourth[];
  games: Game[];
}