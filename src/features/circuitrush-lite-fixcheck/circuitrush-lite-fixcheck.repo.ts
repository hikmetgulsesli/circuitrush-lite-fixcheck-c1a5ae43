import { getGameState, subscribe, type GameState } from './circuitrush-lite-fixcheck.store';

export interface GameRepo {
  getState: () => GameState;
  subscribe: (listener: () => void) => () => void;
}

export const gameRepo: GameRepo = {
  getState: getGameState,
  subscribe,
};
