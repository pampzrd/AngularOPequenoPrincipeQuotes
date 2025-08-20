import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataQuotes } from '../../Data/dataQuotes';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.html',
  styleUrls: ['./maincontent.css']
})
export class Maincontent {
  private id: string | null = "";
  tituloTrecho: string = "";
  textoTrecho: string = "";
  comentarioTrecho: string = "";

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(value =>
      this.id=value.get("id"));
      this.getTheValues(this.id);
    }

  getTheValues(id: string | null) {
    const data = dataQuotes.filter(article => article.id == id)[0]
    if (data) {
      this.tituloTrecho = data.title;
      this.textoTrecho = data.text;
      this.comentarioTrecho = data.comment;
    }
  }
}
