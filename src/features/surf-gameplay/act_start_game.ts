import { getGameStore } from '../circuitrush-lite-fixcheck/circuitrush-lite-fixcheck.store';

export function actStartGame() {
  const store = getGameStore();
  store.startGame();
}
