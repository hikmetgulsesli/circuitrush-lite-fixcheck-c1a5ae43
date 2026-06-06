import { getGameStore } from '../circuitrush-lite-fixcheck/circuitrush-lite-fixcheck.store';

export function actPauseGame() {
  const store = getGameStore();
  store.pauseGame();
}
