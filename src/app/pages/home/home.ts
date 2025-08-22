import { Component } from '@angular/core';
import {Maincontent} from '../../components/maincontent/maincontent';
import {Title} from '../../components/title/title';


@Component({
  selector: 'app-home',
  imports: [Maincontent, Title],
  templateUrl: './home.html',
  styleUrls: ['./home.css','homeResponsively.css']
})
export class Home {

}
