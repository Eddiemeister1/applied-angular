import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-demos-signals',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  template: `
    <p>Golf Score</p>
    <div>
      <span>{{ strokeCount() }} </span>

      <button (click)="addStroke()" class="btn btn-sm btn-circle">+</button>
    </div>
    @if (strokeCount() !== 0) {
      <div>
        <button
          [disabled]="atZero()"
          (click)="strokeCount.set(0)"
          class="btn btn-warning"
        >
          Reset
        </button>
      </div>
    }

    <router-outlet />
  `,
  styles: ``,
})
export class Signals {
  strokeCount = signal(0);

  atZero = computed(() => {
    return this.strokeCount() === 0;
  });
  addStroke() {
    // this.strokeCount.set(this.strokeCount() + 1);
    this.strokeCount.update((oldCount) => oldCount + 1);
  }
}
