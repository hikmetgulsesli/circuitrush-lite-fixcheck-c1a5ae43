import { getGameState, subscribe, useGameStore, dispatchTick } from '../features/circuitrush-lite-fixcheck/circuitrush-lite-fixcheck.store';

export const testBridge = {
  getState: getGameState,
  subscribe,
  tick: dispatchTick,
  actions: {
    startGame: () => useGameStore().startGame(),
    pauseGame: () => useGameStore().pauseGame(),
    resumeGame: () => useGameStore().resumeGame(),
    abortGame: () => useGameStore().abortGame(),
    openSettings: () => useGameStore().openSettings(),
    closeSettings: () => useGameStore().closeSettings(),
    moveLeft: () => useGameStore().moveLeft(),
    moveRight: () => useGameStore().moveRight(),
    resetGame: () => useGameStore().resetGame(),
    saveSettings: () => useGameStore().saveSettings(),
  },
};
