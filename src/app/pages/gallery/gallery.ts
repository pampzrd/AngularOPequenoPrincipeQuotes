import { Component } from '@angular/core';
import {CardTrecho} from '../../components/card-trecho/card-trecho';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [
    CardTrecho,
    NgForOf
  ],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  card:string = "";
  lista:string[] = [];
  isEnabled:boolean = true;
  adicionarLista(){
    //Puxar a quantidade de itens do json e atribuir ao id.
    this.lista.push(this.card);
  }
  constructor() { }

}
