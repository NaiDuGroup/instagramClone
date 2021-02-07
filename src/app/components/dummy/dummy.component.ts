import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PhotoDialogComponent } from '../photo-dialog/photo-dialog.component';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  currDialog: MatDialogRef<any> = null;
  destroy = new Subject<any>();

  constructor(
    matDialog: MatDialog,
    route: ActivatedRoute,
    router: Router
  ) {
    route.params.pipe(takeUntil(this.destroy)).subscribe(
      params => {
        if (this.currDialog) {
          this.currDialog.close();
        }

        this.currDialog = matDialog.open(PhotoDialogComponent, {
          panelClass: 'custom-dialog-container',
          data: { id: params.id }
        });

        this.currDialog.afterClosed().subscribe(result => {
          router.navigateByUrl('/');
        })
      }
    )
  }

  ngOnInit(): void {
  }

}
