import { Component } from '@angular/core';
import {Maincontent} from "../../components/maincontent/maincontent";

@Component({
  selector: 'app-content',
    imports: [
        Maincontent
    ],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {

}
