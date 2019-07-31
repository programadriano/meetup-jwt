import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpUtilService } from 'src/app/shared/services/http-util.service';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private API_URL = environment.URL;

  constructor(
    private http: HttpClient,
    private httpUtil: HttpUtilService) { }

  getAll() {
    return this.http.get(this.API_URL + '/values')
      .pipe(map(this.httpUtil.extrairDados))
      .pipe(
        catchError(this.httpUtil.processarErros));
  }

}
