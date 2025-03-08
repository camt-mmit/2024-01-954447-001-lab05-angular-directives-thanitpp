import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-trail-two',
  imports: [],
  templateUrl: './trail-two.component.html',
  styleUrl: './trail-two.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrailTwoComponent {
  protected items = [0, 0];

  readonly totalValue = input<number>();
  readonly totalVAlueChange = output<number>();
  protected onChange(index: number, value: number): void {
    this.items[index] = value;
    console.info(this.items);
  }

  protected add(): void {
    this.items.push(0);
    console.info(this.items);
  }
  protected remove(index: number): void {
    this.items.splice(index, 1);
    console.info(this.items);
  }
  protected changeColor(elem: HTMLElement): void {
    elem.style.backgroundColor = 'yellow';
  }
}
