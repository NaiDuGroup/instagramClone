import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoHttpService } from '../../servicies';

@Component({
  selector: 'app-profile-photo-list',
  templateUrl: './profile-photo-list.component.html',
  styleUrls: ['./profile-photo-list.component.scss']
})
export class ProfilePhotoListComponent implements OnInit {

  photos$: Observable<any>;

  private _Key = 'UBzFkf1ihtrG2ULugkCo5DII4e7ZlaD6hSJVjz2aUkM';

  constructor(
    private _service: PhotoHttpService
  ) { }

  ngOnInit(): void {
    this.photos$ = this._service.getByPage(this._Key, 1, 21);
  }

}
