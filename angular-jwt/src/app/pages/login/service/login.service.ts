import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpUtilService } from 'src/app/shared/services/http-util.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_URL = environment.URL;


  constructor(private http: HttpClient, private httpUtil: HttpUtilService) { }

  login(user) {
    return this.http.post(this.API_URL + '/authentication', user)
    .pipe(map(this.httpUtil.extrairDados))
    .pipe(
      catchError(this.httpUtil.processarErros));
  }
}
