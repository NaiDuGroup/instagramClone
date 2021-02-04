import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map,tap } from 'rxjs/operators';

import { PhotoHttpService } from '../../servicies';



@Component({
  selector: 'app-profile-photo-list',
  templateUrl: './profile-photo-list.component.html',
  styleUrls: ['./profile-photo-list.component.scss']
})
export class ProfilePhotoListComponent implements OnInit, OnDestroy {

  photos$ : Observable<any>;

  private _subs: Subscription;
  private _Key = 'UBzFkf1ihtrG2ULugkCo5DII4e7ZlaD6hSJVjz2aUkM';

  constructor(
    private _service: PhotoHttpService
  ) { }


  ngOnInit(): void {
    this._subs = new Subscription();
    // this._subs.add(
      this.photos$ = this._service.getByPage(this._Key, 10, 21);
      console.log(this.photos$);
      // .pipe(
      //   tap((resp) => console.log(resp)),
      //   map((resp) => this.photos$ = resp),
      //   tap((resp) => console.log(resp)),
      // ).subscribe()
    // )
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

}
