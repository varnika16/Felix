import { Routes, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../services/auth-guard.service';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { CategoryComponent } from '../category/category.component';
import { MusicComponent } from '../music/music.component';
import { MusicdetailComponent } from '../musicdetail/musicdetail.component';
import { TvseriesComponent } from '../tvseries/tvseries.component';
import { EngseriesdetailComponent } from '../engseriesdetail/engseriesdetail.component';
import { HinseriesdetailComponent } from '../hinseriesdetail/hinseriesdetail.component';
import { KorseriesdetailComponent } from '../korseriesdetail/korseriesdetail.component';
import { MoviesComponent } from '../movies/movies.component';
import { EngmoviesdetailComponent } from '../engmoviesdetail/engmoviesdetail.component';
import { HinmoviesdetailComponent } from '../hinmoviesdetail/hinmoviesdetail.component';
import { PunmoviesdetailComponent } from '../punmoviesdetail/punmoviesdetail.component';
import { FourthComponent } from '../fourth/fourth.component';
import { PlaygameComponent } from '../playgame/playgame.component';
import { OpenworldComponent } from '../openworld/openworld.component';

export  const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'aboutus', component: AboutComponent},
	{ path: 'contactus', component: ContactComponent },
	{ path: 'category/:id', component: CategoryComponent },
	{ path: 'music/:id', component: MusicComponent },
	{ path: 'musicdetail/:id/:mid', component: MusicdetailComponent },
	{ path: 'tvseries/:id', component: TvseriesComponent},
	{ path: 'engseriesdetail/:id/:etid', component: EngseriesdetailComponent},
	{ path: 'hinseriesdetail/:id/:htid', component: HinseriesdetailComponent},
	{ path: 'korseriesdetail/:id/:ktid', component: KorseriesdetailComponent},
	{ path: 'movies/:id', component: MoviesComponent },
	{ path: 'engmoviesdetail/:id/:emid', component: EngmoviesdetailComponent},
	{ path: 'hinmoviesdetail/:id/:hmid', component: HinmoviesdetailComponent},
	{ path: 'punmoviesdetail/:id/:pmid', component: PunmoviesdetailComponent},
	{ path: 'fourth/:id', component: FourthComponent },
	{ path: 'playgame/:id', component: PlaygameComponent},
	{ path: 'openworld', component: OpenworldComponent, canActivate: [AuthGuard] },
	{ path: '', redirectTo: '/home', pathMatch: 'full'}
];