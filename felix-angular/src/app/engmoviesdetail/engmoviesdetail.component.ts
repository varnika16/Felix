import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { Mood } from '../shared/mood';
import { Movie } from '../shared/movie';
import { Review } from '../shared/review';
import { MoodService } from '../services/mood.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-engmoviesdetail',
  templateUrl: './engmoviesdetail.component.html',
  styleUrls: ['./engmoviesdetail.component.scss']
})
export class EngmoviesdetailComponent implements OnInit {

  mood : Mood;
  engMovie: Movie;
  errMess: string;
  prev : number;
  next : number;
  review: Review;
  reviewForm : FormGroup;
  @ViewChild("cform") reviewFormDirective;
  reviewErrors = {
    name: '',
    rating: 5,
    review: ''
  };

  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 2 characters long.',
    },
    'review': {
      'required': 'Review is required.',
    },
  };

  constructor(private moodservice: MoodService,
    private route: ActivatedRoute,
    private location: Location,
    private fb : FormBuilder,
    @Inject('BaseURL') private BaseURL) {  this.createForm(); }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {return this.moodservice.getMood(params['id']); }))
    .subscribe(mood => {this.mood = mood;}, errmess => this.errMess = <any>errmess);
    this.route.params.pipe(switchMap((params: Params) => {return this.moodservice.getEngMovie(params['id'], params['emid']); }))
    .subscribe(engMovie => {this.engMovie = engMovie; this.changePage(engMovie.id); },  errmess => this.errMess = <any>errmess);
  }

  changePage(index: number): void{
    this.next = index+1;
    this.prev = index-1;
  }

  createForm(){
    this.reviewForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      rating: 5,
      review: ['', [Validators.required]]
    });
    this.reviewForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any){
    if(!this.reviewForm){ return; }
    const form = this.reviewForm;
    for (const field in this.reviewErrors){
      if(this.reviewErrors.hasOwnProperty(field)){
        this.reviewErrors[field] = '';
        const control = form.get(field);
        if(control && control.dirty && !control.valid){
          const messages = this.validationMessages[field];
          for(const key in control.errors){
            if(control.errors.hasOwnProperty(key)){
              this.reviewErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit(){
    this.review = this.reviewForm.value;
    this.review.date = new Date().toISOString();
    this.engMovie.reviews.push(this.review);
    this.moodservice.putMood(this.mood)
    .subscribe(mood => {
      this.mood=mood; 
    },
    errmess => {this.mood = null; this.errMess = <any>errmess;});
    console.log(this.review);
    this.reviewForm.reset({
      name: '',
      rating: 5,
      review: ''
    });
    this.reviewFormDirective.resetForm({
      name: '',
      rating: 5,
      review: ''
    });
  }

}
