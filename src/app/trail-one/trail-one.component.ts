import { Component } from '@angular/core';

@Component({
  selector: 'app-trail-one',
  imports: [],
  templateUrl: './trail-one.component.html',
  styleUrl: './trail-one.component.scss',
})
export class TrailOneComponent {
  protected items = [0, 0];
  protected onChange(index: number, value: number): void {
    this.items[index] = value;
    console.info(this.items);
  }
}
