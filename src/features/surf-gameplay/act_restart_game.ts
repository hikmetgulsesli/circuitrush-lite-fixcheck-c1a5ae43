import { getGameStore } from '../circuitrush-lite-fixcheck/circuitrush-lite-fixcheck.store';

export function actRestartGame() {
  const store = getGameStore();
  store.resetGame();
  store.startGame();
}
