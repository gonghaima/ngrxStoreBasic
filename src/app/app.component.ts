import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import * as constants from './constants/constants';
import {store} from './store/store';
// import {counterStore} from './store/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[store]
})
export class AppComponent {
  counter:any;
  constructor(public store: Store<any[]>) {
    this.counter=store.select('counter');
  }
    
    increment(){
      this.store.dispatch({type: INCREMENT})
    }
    
    decrement(){
      this.store.dispatch({type: DECREMENT})
    }
}
