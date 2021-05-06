import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { Mood } from '../shared/mood';
import { MoodService } from '../services/mood.service';
import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut()
  ],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  moods: Mood[];
  errMess: string;

  images = ['/assets/quote1.png','/assets/quote2.png','/assets/theholiday.jpg','/assets/englishmusic.jpg','/assets/Friends.jpg','/assets/quote3.png','/assets/quote4.png'];

  constructor(private moodService: MoodService,
    @Inject('BaseURL')private BaseURL) { }

  ngOnInit(): void {
    this.moodService.getMoods()
    .subscribe(moods => this.moods = moods,
      errMess => this.errMess = <any>errMess);
  }

}
