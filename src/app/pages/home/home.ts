import { Component } from '@angular/core';
import { Gallery} from '../gallery/gallery';

@Component({
  selector: 'app-home',
  imports: [Gallery],
  templateUrl: './home.html',
  styleUrls: ['./home.css','homeResponsively.css']
})
export class Home {

}
