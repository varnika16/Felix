import { Injectable } from '@angular/core';
import { Mood } from '../shared/mood';
import { Music } from '../shared/music';
import { Tvserie } from '../shared/tvserie';
import { Movie } from '../shared/movie';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class MoodService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

    getMoods(): Observable<Mood[]> {
      return this.http.get<Mood[]>(baseURL + 'moods')
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getMood(id: number): Observable<Mood> {
      return this.http.get<Mood>(baseURL+'moods/'+id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getMoodIds(): Observable<number[] | any> {
      return this.getMoods().pipe(
        map(moods => moods.map(mood => mood.id)))
      .pipe(catchError(error => error));
    }

    getMusic(moodId: number, musicId: number): Observable<Music> {
      return this.getMood(moodId).pipe(
        map(moods => moods.musics.find(music => music.id == musicId)));
    }

    getEngSerie(moodId: number, engSerieId: number): Observable<Tvserie> {
      return this.getMood(moodId).pipe(
        map(moods => moods.engSeries.find(engSerie => engSerie.id == engSerieId)));
    }
    getHinSerie(moodId: number, hinSerieId: number): Observable<Tvserie> {
      return this.getMood(moodId).pipe(
        map(moods => moods.hinSeries.find(hinSerie => hinSerie.id == hinSerieId)));
    }
    getKorSerie(moodId: number, korSerieId: number): Observable<Tvserie> {
      return this.getMood(moodId).pipe(
        map(moods => moods.korSeries.find(korSerie => korSerie.id == korSerieId)));
    }

    getEngMovie(moodId: number, engMovieId: number): Observable<Movie> {
      return this.getMood(moodId).pipe(
        map(moods => moods.engMovies.find(engMovie => engMovie.id == engMovieId)));
    }
    getHinMovie(moodId: number, hinMovieId: number): Observable<Movie> {
      return this.getMood(moodId).pipe(
        map(moods => moods.hinMovies.find(hinMovie => hinMovie.id == hinMovieId)));
    }
    getPunMovie(moodId: number, punMovieId: number): Observable<Movie> {
      return this.getMood(moodId).pipe(
        map(moods => moods.punMovies.find(punMovie => punMovie.id == punMovieId)));
    }

    putMood(mood: Mood): Observable<Mood> {
      const httpOptions ={
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      return this.http.put<Mood>(baseURL + 'moods/' + mood.id, mood, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }

}


