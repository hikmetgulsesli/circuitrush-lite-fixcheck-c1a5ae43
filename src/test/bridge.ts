import { getGameState, subscribe, getGameStore, dispatchTick } from '../features/circuitrush-lite-fixcheck/circuitrush-lite-fixcheck.store';

export const testBridge = {
  getState: getGameState,
  subscribe,
  tick: dispatchTick,
  actions: {
    startGame: () => getGameStore().startGame(),
    pauseGame: () => getGameStore().pauseGame(),
    resumeGame: () => getGameStore().resumeGame(),
    abortGame: () => getGameStore().abortGame(),
    openSettings: () => getGameStore().openSettings(),
    closeSettings: () => getGameStore().closeSettings(),
    moveLeft: () => getGameStore().moveLeft(),
    moveRight: () => getGameStore().moveRight(),
    resetGame: () => getGameStore().resetGame(),
    saveSettings: () => getGameStore().saveSettings(),
  },
};
