import { Injectable } from '@angular/core';
import { OpenWorld } from '../shared/openworld';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { baseURL2 } from '../shared/baseurl2';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OpenworldService {

  constructor(private http: HttpClient,
    public auth: AuthService,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

    getOpenWorlds(): Observable<OpenWorld> {
      if(!this.auth.isLoggedIn()) {
        return null;
      }
      return this.http.get<OpenWorld>(baseURL2 + 'openworlds')
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }

    postOpenWorld(openWorld: OpenWorld, file: File):Observable<any>{
      const formData = new FormData();
      formData.append('imageFile', file);
      formData.append('caption', openWorld.caption);
      return this.http.post(baseURL2 + 'openworlds', formData)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }
}