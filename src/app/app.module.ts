import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';

var firebaseConfig = {
  apiKey: "AIzaSyDvBEdmdt51nTMgSxnk6J-AaBL6F21OGE8",
  authDomain: "nhccpage.firebaseapp.com",
  databaseURL: "https://nhccpage.firebaseio.com",
  projectId: "nhccpage",
  storageBucket: "nhccpage.appspot.com",
  messagingSenderId: "1034156714224"
};

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
  BrowserModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFirestoreModule,
  FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
