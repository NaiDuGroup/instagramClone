import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PhotoHttpService } from 'src/app/servicies';

@Component({
  selector: 'app-photo-dialog',
  templateUrl: './photo-dialog.component.html',
  styleUrls: ['./photo-dialog.component.scss']
})
export class PhotoDialogComponent implements OnInit {

  photo$: Observable<any>;

  private _Key = 'UBzFkf1ihtrG2ULugkCo5DII4e7ZlaD6hSJVjz2aUkM';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _service: PhotoHttpService
  ) { }

  ngOnInit(): void {
    this.photo$ = this._service.getById(this._Key, this.data.id);
  }

}
