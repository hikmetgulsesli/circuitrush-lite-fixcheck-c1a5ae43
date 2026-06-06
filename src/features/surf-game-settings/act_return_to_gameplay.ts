import { getGameStore } from '../circuitrush-lite-fixcheck/circuitrush-lite-fixcheck.store';

export function actReturnToGameplay() {
  const store = getGameStore();
  store.closeSettings();
}
