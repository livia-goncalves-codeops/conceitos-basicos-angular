import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    FormsModule,
    CommonModule,
  ],
  selector: 'app-calculadora',
  styleUrl: './calculadora.scss',
  templateUrl: './calculadora.html',
})
export class Calculadora {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  calcularResultado(){
    console.log("Chamando o método para calcular o resultado!!!");
    console.log("Numero1: " + this.numero1);
    console.log("Numero2: " + this.numero2);
    this.resultado = this.numero1 + this.numero2;
  }
}
