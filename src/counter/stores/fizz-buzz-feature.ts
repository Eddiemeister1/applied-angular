import { signalStoreFeature, withState } from '@ngrx/signals';

export function withFizzBuzz() {
  return signalStoreFeature(
    {
      state: type<{ current: number }>(),
    },
    withState({ current: 0 }),
    withComputed((store) => ({
      fizzBuzz: () => fizzBuzzComputed,
    })),
  );
}
