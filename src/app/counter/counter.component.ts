import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <p>counter {{counter}}</p>

    <button (click)="incrementar(1)" >+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="incrementar(-1)">-1</button>
  `
})

export class CounterComponent{
  public counter: number = 10;

  public incrementar(value:number): void{
    this.counter += value;
  }

  public reset(): void{
    this.counter = 10;
  }
}
