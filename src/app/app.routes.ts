import { Routes } from '@angular/router';
import {Maincontent} from './components/maincontent/maincontent';
import {Home} from './pages/home/home';

export const routes: Routes = [
  {
    path:'',
    component: Maincontent
  },
  {
    path:':id',
    component: Maincontent
  },
];
