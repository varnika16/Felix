import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { OpenWorld } from '../shared/openworld';
import { OpenworldService } from '../services/openworld.service';
import { flyInOut } from '../animations/app.animation';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-openworld',
  templateUrl: './openworld.component.html',
  styleUrls: ['./openworld.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut()
  ]
})
export class OpenworldComponent implements OnInit {

  openworlds: OpenWorld;
  isUploading: boolean;
  errMess: string;
  openWorldForm : FormGroup;
  @ViewChild("owform") openWorldFormDirective;
  openWorldErrors = {
    caption: '',
    image: ''
  };

  validationMessages = {
    'caption': {
      'required': 'Caption is required.',
    },
    'image': {
      'required': 'Media is required.',
    },
  };

  constructor(private openworldService: OpenworldService,
    private route: ActivatedRoute,
    private location: Location,
    private fb : FormBuilder,
    @Inject('BaseURL2') private BaseURL2,
    ) { this.createPost(); }

  ngOnInit(): void {
    this.openworldService.getOpenWorlds()
      .subscribe(openworlds => this.openworlds = openworlds,
        errmess => this.errMess = <any>errmess);
  }

  createPost(){
    this.openWorldForm = this.fb.group({
      caption: ['',Validators.required],
      image: ['', Validators.required]
    });
    this.openWorldForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.openWorldForm) { return; }
    const form = this.openWorldForm;
    for (const field in this.openWorldErrors) {
      if (this.openWorldErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.openWorldErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.openWorldErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  
  onSubmit(){
    this.isUploading = true;
    this.openworldService.postOpenWorld(this.openWorldForm.value, this.openWorldForm.get('image').value._files[0])
      .subscribe(openworlds => this.openworlds = <OpenWorld>openworlds,
        errmess => this.errMess = <any>errmess);
    this.openWorldForm.reset({
      caption: '',
      image: ''
    });
    this.openWorldFormDirective.resetForm({
      caption: '',
      image: ''
    });
    setTimeout(() => window.location.reload(), 1500);
  }
}
