import { getGameStore, subscribe, type GameStore } from '../features/circuitrush-lite-fixcheck/circuitrush-lite-fixcheck.store';

let runtimeHandle: number | null = null;
let isRunning = false;

export function startGameRuntime() {
  if (isRunning) return;
  isRunning = true;

  let lastTime = performance.now();
  const interval = 1000 / 60; // 60 FPS target

  const tick = (now: number) => {
    if (!isRunning) return;

    const elapsed = now - lastTime;
    if (elapsed >= interval) {
      lastTime = now - (elapsed % interval);
      const store = getGameStore();
      store.tick();
    }
    runtimeHandle = requestAnimationFrame(tick);
  };

  runtimeHandle = requestAnimationFrame(tick);
}

export function stopGameRuntime() {
  isRunning = false;
  if (runtimeHandle !== null) {
    cancelAnimationFrame(runtimeHandle);
    runtimeHandle = null;
  }
}

export function isGameRuntimeRunning() {
  return isRunning;
}

export function getRuntimeState() {
  const store = getGameStore();
  return {
    state: {
      screen: store.screen,
      playerLane: store.playerLane,
      playerPosition: store.playerPosition,
      obstacles: store.obstacles,
      shards: store.shards,
      score: store.score,
      energy: store.energy,
      lives: store.lives,
      paused: store.paused,
      gameOver: store.gameOver,
      speed: store.speed,
      tickCount: store.tickCount,
    },
    actions: {
      startGame: store.startGame,
      pauseGame: store.pauseGame,
      resumeGame: store.resumeGame,
      abortGame: store.abortGame,
      openSettings: store.openSettings,
      closeSettings: store.closeSettings,
      moveLeft: store.moveLeft,
      moveRight: store.moveRight,
      tick: store.tick,
      resetGame: store.resetGame,
      saveSettings: store.saveSettings,
    },
  };
}
