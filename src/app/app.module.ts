import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';


var firebaseConfig = {
  apiKey: "AIzaSyDoGraVj8MypaiRKBpcGyz1f9t9MbQkYK4",
  authDomain: "firestore-2f160.firebaseapp.com",
  databaseURL: "https://firestore-2f160.firebaseio.com",
  projectId: "firestore-2f160",
  storageBucket: "firestore-2f160.appspot.com",
  messagingSenderId: "787772283982"
};

@NgModule({
  declarations: [
    AppComponent
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
