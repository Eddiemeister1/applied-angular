import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../stores/counterstore';

@Component({
  selector: 'app-counter-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      @for (counterPref of store.counterPrefs; track counterPref) {
        <button
          class="btn btn-primary"
          (click)="store.setCounterPref(counterPref)"
        >
          {{ counterPref }}
        </button>
      }
    </div>
  `,
  styles: ``,
})
export class Prefs {
  store = inject(CounterStore);
}
