import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-support-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <span> {{ current() }} </span>
      <button class="primary-button" (click)="increment()">Increment</button>
    </div>
  `,
  styles: ``,
})
export class Support {
  current = signal(0);
  increment() {
    this.current.update((c) => c + 1);
  }
}
