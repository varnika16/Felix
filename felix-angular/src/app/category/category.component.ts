import { Component, OnInit, Inject } from '@angular/core';
import { Mood } from '../shared/mood';
import { Category } from '../shared/category';
import { MoodService } from '../services/mood.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut()
  ]
})
export class CategoryComponent implements OnInit {

  mood : Mood;
  category: Category;
  errMess: string;

  constructor(private moodservice: MoodService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {return this.moodservice.getMood(params['id']); }))
    .subscribe(mood => {this.mood = mood;}, errmess => this.errMess = <any>errmess);
  }
  
  goBack(): void {
    this.location.back();
  }

}
