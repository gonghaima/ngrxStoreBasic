import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import {store} from './store/store';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // store
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // store
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
