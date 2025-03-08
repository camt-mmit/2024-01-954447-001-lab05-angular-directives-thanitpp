import { Component } from '@angular/core';

@Component({
  selector: 'app-example-one',
  imports: [],
  templateUrl: './example-one.component.html',
  styleUrl: './example-one.component.scss',
  
})
export class ExampleOneComponent {
protected value = 0

constructor() {
  setInterval(() => {
    this.value++;
    console.log(this.value);
  }, 1_000);
}
}
