import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { apiPhotos } from '../api';

@Injectable({
  providedIn: 'root'
})
export class PhotoHttpService {

  constructor(
    private _http: HttpClient,
    ) { }

  getByPage(client_id: string, page: number, per_page: number ): Observable<any> {
    return this._http.get<Observable<any>>(apiPhotos(), {
      params: {
        client_id,
        page: page.toString(),
        per_page: per_page.toString()
      }
    })
  }
}
