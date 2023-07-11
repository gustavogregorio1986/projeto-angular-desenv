import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   valor1: number = 87;
   valor2: number = 65;

   somar(){
     return this.valor1 + this.valor1;
   }

   subtrair(){
     return this.valor1 - this.valor2;
   }

   multiplicar(){
    return this.valor1 * this.valor2;
   }

   divisao(){
    return this.valor1 / this.valor2;
   }

   operacao(){
    return (this.valor1 + this.valor2) + (this.valor1 - this.valor1) * this.valor2;
   }
}
