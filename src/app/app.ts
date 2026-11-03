import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaObras } from './lista-obras/lista-obras';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaObras],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Romanna');
}
