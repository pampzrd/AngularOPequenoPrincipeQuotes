import { Component } from '@angular/core';
import {Maincontent} from '../../components/maincontent/maincontent';
import {Title} from '../../components/title/title';
import {Staticstickers} from '../../components/staticstickers/staticstickers';
import {Stickers} from '../../components/stickers/stickers';

@Component({
  selector: 'app-home',
  imports: [Maincontent,Title,Staticstickers,Stickers],
  templateUrl: './home.html',
  styleUrls: ['./home.css','homeResponsively.css']
})
export class Home {

}
