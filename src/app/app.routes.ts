import { Routes } from '@angular/router';
import {Maincontent} from './components/maincontent/maincontent';

export const routes: Routes = [
  {
    path:'content/:id',
    component: Maincontent
  },
];
