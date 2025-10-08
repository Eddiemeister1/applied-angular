import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';

import {
  withStorageSync,
  withDevtools,
} from '@angular-architects/ngrx-toolkit';
const counterValues = [1, 3, 5] as const;
export type CounterPrefs = (typeof counterValues)[number];
type CounterState = {
  currentCount: number;
  counterPref: CounterPrefs;
};
export const CounterStore = signalStore(
  withProps(() => ({
    counterPrefs: counterValues,
  })),
  withDevtools('counter'),
  withState<CounterState>({
    currentCount: 0,
    counterPref: 1,
  }),
  withStorageSync('counter'),
  withMethods((state) => ({
    setCounterPref: (counterPref: CounterPrefs) =>
      patchState(state, { counterPref }),
    increment: () =>
      patchState(state, {
        currentCount: state.currentCount() + state.counterPref(),
      }),
    decrement: () =>
      patchState(state, {
        currentCount: state.currentCount() - state.counterPref(),
      }),
  })),
  withComputed((store) => {
    return {
      atZero: computed(() => {
        return store.currentCount() <= 0;
      }),
      divisibleByThree: computed(() => {
        return store.currentCount() % 3 === 0;
      }),
      divisibleByFive: computed(() => {
        return store.currentCount() % 5 === 0;
      }),
    };
  }),
);
