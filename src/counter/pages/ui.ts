import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-counter-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button
        class="btn btn-primary"
        [disabled]="atZero()"
        (click)="decrement()"
      >
        -
      </button>
      <span>{{ counterValue() }}</span>
      <button class="btn btn-primary" (click)="increment()">+</button>
    </div>
    @if (divisibleByThree() && divisibleByFive()) {
      <div role="alert" class="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>FizzBuzz!</span>
      </div>
    } @else if (divisibleByThree()) {
      <div role="alert" class="alert alert-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="h-6 w-6 shrink-0 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>Fizz!</span>
      </div>
    } @else if (divisibleByFive()) {
      <div role="alert" class="alert alert-warning">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>Buzz!</span>
      </div>
    }
  `,
  styles: ``,
})
export class Ui {
  counterValue = signal(0);

  atZero = computed(() => {
    return this.counterValue() === 0;
  });

  divisibleByThree = computed(() => {
    return this.counterValue() % 3 === 0;
  });

  divisibleByFive = computed(() => {
    return this.counterValue() % 5 === 0;
  });

  increment() {
    this.counterValue.update((counterValue) => counterValue + 1);
  }

  decrement() {
    this.counterValue.update((counterValue) => counterValue - 1);
  }
}
