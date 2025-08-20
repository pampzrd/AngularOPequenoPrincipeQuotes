import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataQuotes } from '../../Data/dataQuotes';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.html',
  styleUrls: ['./maincontent.css']
})
export class Maincontent {
  private id: string | null = "1";
  tituloTrecho: string = "";
  textoTrecho: string = "";
  comentarioTrecho: string = "";

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id");
      this.getTheValues(this.id);
    });
  }

  getTheValues(id: string | null) {
    const data = dataQuotes.find(retorno => retorno.id === id);
    if (data) {
      this.tituloTrecho = data.title;
      this.textoTrecho = data.text;
      this.comentarioTrecho = data.comment;
    }
  }
}
