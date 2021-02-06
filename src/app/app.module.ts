import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { 
  HeaderComponent,
  ProfileInfoComponent,
  ProfilePhotoListComponent,
  PhotoDialogComponent,
  DummyComponent
} from './components';
import { PhotoHttpService } from './servicies';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileInfoComponent,
    ProfilePhotoListComponent,
    PhotoDialogComponent,
    DummyComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [PhotoHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
