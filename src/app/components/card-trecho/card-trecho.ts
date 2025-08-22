import { Component } from '@angular/core';
import {RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-card-trecho',
  imports: [
    RouterLinkActive
  ],
  templateUrl: './card-trecho.html',
  styleUrl: './card-trecho.css'
})
export class CardTrecho {
  private id :string|null="";
  tituloCard:string="";

}
