import { Component } from '@angular/core';
import {Maincontent} from '../../components/maincontent/maincontent';
import {Title} from '../../components/title/title';
import {Stickers} from '../../components/stickers/stickers';
import {Bgart} from '../../components/bgart/bgart';

@Component({
  selector: 'app-home',
  imports: [Maincontent, Title, Stickers, Bgart],
  templateUrl: './home.html',
  styleUrls: ['./home.css','homeResponsively.css']
})
export class Home {

}
