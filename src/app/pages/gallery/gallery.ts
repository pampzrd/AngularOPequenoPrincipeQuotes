import { Component } from '@angular/core';
import {CardTrecho} from '../../components/card-trecho/card-trecho';


@Component({
  selector: 'app-gallery',
  imports: [
    CardTrecho
  ],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  card:string = "";

  constructor() { }


}
