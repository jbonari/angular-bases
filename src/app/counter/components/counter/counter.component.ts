import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h1>Hola Counter</h1>
  <h3>Counter: {{counter}}</h3>
  <button (click)="increseBy()">+1</button>
  <button (click)="resetCounter()">RESET</button>
  <button (click)="decreaseBy()">-1</button>
  `
})

export class CounterComponent {
  constructor() { }


  public counter:number=10;

  increseBy():void{
    this.counter+=1;
  }

  decreaseBy(value:number=this.counter):void{
    this.counter=value-1;
  }

  resetCounter(){
    this.counter=10;
  }



}
