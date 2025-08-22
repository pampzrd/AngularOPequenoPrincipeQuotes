import {Component, Input} from '@angular/core';
import {ActivatedRoute, RouterLinkActive} from '@angular/router';
import {dataQuotes} from '../../Data/dataQuotes';

@Component({
  selector: 'app-card-trecho',
  imports: [
    RouterLinkActive,
    dataQuotes
  ],
  templateUrl: './card-trecho.html',
  styleUrl: './card-trecho.css'
})
export class CardTrecho {
  @Input()
  id :string|null="";
  tituloCard:string="";

  constructor(private route:ActivatedRoute) {
    this.route.paramMap.subscribe(value=>this.id=value.get("id"));
    this.pegarTituloPeloId(this.id)
  }
  //méto do para atribuir um id para pegar o conteudo desse id do "banco"
  pegarTituloPeloId(id:string|null){
    this.id=id;
    const data = dataQuotes.filter(trecho=>trecho.id==id)[0]
    this.tituloCard=data.title;
  }

}
