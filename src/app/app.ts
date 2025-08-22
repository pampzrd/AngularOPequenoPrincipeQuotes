import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Home} from './pages/home/home';
import {Title} from './components/title/title';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Title],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('OPequenoPrincipeQuotes');
}
