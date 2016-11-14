import {provideStore} from '@ngrx/store';
import {counter} from '../constants/constants';

export const store= provideStore({counter});