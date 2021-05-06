import { Component, OnInit, Inject } from '@angular/core';
import { Mood } from '../shared/mood';
import { Game } from '../shared/game';
import { MoodService } from '../services/mood.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-playgame',
  templateUrl: './playgame.component.html',
  styleUrls: ['./playgame.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut()
  ]
})
export class PlaygameComponent implements OnInit {

  mood: Mood;
  game: Game;
  errMess: String;

  constructor(private moodservice: MoodService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {return this.moodservice.getMood(params['id']); }))
    .subscribe(mood => {this.mood = mood;}, errmess => this.errMess = <any>errmess);
  }

}
