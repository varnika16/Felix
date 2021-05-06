import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSliderModule} from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SafePipeModule } from 'safe-pipe';
import { NgImageSliderModule } from 'ng-image-slider';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';
import { MusicComponent } from './music/music.component';
import { MusicdetailComponent } from './musicdetail/musicdetail.component';
import { TvseriesComponent } from './tvseries/tvseries.component';
import { EngseriesdetailComponent } from './engseriesdetail/engseriesdetail.component';
import { HinseriesdetailComponent } from './hinseriesdetail/hinseriesdetail.component';
import { KorseriesdetailComponent } from './korseriesdetail/korseriesdetail.component';
import { MoviesComponent } from './movies/movies.component';
import { EngmoviesdetailComponent } from './engmoviesdetail/engmoviesdetail.component';
import { HinmoviesdetailComponent } from './hinmoviesdetail/hinmoviesdetail.component';
import { PunmoviesdetailComponent } from './punmoviesdetail/punmoviesdetail.component';
import { FourthComponent } from './fourth/fourth.component';
import { PlaygameComponent } from './playgame/playgame.component';
import { LoginComponent } from './login/login.component';

import { baseURL } from './shared/baseurl';
import { baseURL2 } from './shared/baseurl2';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { MoodService } from './services/mood.service';
import { OpenworldService } from './services/openworld.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthInterceptor, UnauthorizedInterceptor } from './services/auth.interceptor';


import 'hammerjs';

import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { HighlightDirective } from './directives/highlight.directive';
import { OpenworldComponent } from './openworld/openworld.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    CategoryComponent,
    MusicComponent,
    MusicdetailComponent,
    TvseriesComponent,
    EngseriesdetailComponent,
    HinseriesdetailComponent,
    KorseriesdetailComponent,
    MoviesComponent,
    EngmoviesdetailComponent,
    HinmoviesdetailComponent,
    PunmoviesdetailComponent,
    FourthComponent,
    PlaygameComponent,
    HighlightDirective,
    LoginComponent,
    OpenworldComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    NgbModule,
    HttpClientModule,
    MatGridListModule,
    MatSliderModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    SafePipeModule,
    NgImageSliderModule,
    MatIconModule,
    MaterialFileInputModule
  ],
  providers: [
    {provide: 'BaseURL', useValue: baseURL},
    {provide: 'BaseURL2', useValue: baseURL2},
    ProcessHTTPMsgService,
    MoodService,
    OpenworldService,
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    }
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
