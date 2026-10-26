import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Helloworld } from './helloworld/helloworld'
// import { Minhapagina } from './minhapagina/minhapagina'
import { Calculadora } from './calculadora/calculadora';
import { ListaCompras } from './lista-compras/lista-compras';

@Component({
  imports: [
    // RouterOutlet,
    // Helloworld,
    // Minhapagina,
    Calculadora,
    ListaCompras
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('conceitos-basicos');
}
