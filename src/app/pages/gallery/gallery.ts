import {Component, numberAttribute} from '@angular/core';
import {CardTrecho} from '../../components/card-trecho/card-trecho';
import {dataQuotes} from '../../Data/dataQuotes';



@Component({
  selector: 'app-gallery',
  imports: [
    CardTrecho,
    dataQuotes
  ],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery{
  card:string = "";
  quantidade:number = dataQuotes.length;
  item:string = "";
  lista:string[] = [];

  constructor() { }
  checarListaDados() {
    this.lista.forEach((item: string, index: number) => {

    });
  }}
