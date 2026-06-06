import { useEffect, useRef, useState, useCallback } from 'react';
import {
  GameplayCircuitrushLiteFixcheck,
  GameSettingsCircuitrushLiteFixcheck,
} from './screens';
import { getGameStore, subscribe, type GameState } from './features/circuitrush-lite-fixcheck/circuitrush-lite-fixcheck.store';
import { startGameRuntime, stopGameRuntime } from './game/game-runtime';

function useGameSelector<T>(selector: (s: GameState) => T): T {
  const store = getGameStore();
  const [value, setValue] = useState(() => selector(store as unknown as GameState));
  const selectorRef = useRef(selector);
  selectorRef.current = selector;

  useEffect(() => {
    const update = () => {
      const s = getGameStore() as unknown as GameState;
      setValue(selectorRef.current(s));
    };
    update();
    const unsub = subscribe(update);
    return () => { unsub(); };
  }, []);

  return value;
}

export default function App() {
  const screen = useGameSelector((s) => s.screen);
  const paused = useGameSelector((s) => s.paused);
  const gameOver = useGameSelector((s) => s.gameOver);
  const score = useGameSelector((s) => s.score);
  const energy = useGameSelector((s) => s.energy);
  const lives = useGameSelector((s) => s.lives);
  const playerLane = useGameSelector((s) => s.playerLane);
  const playerPosition = useGameSelector((s) => s.playerPosition);
  const obstacles = useGameSelector((s) => s.obstacles);
  const shards = useGameSelector((s) => s.shards);
  const speed = useGameSelector((s) => s.speed);
  const tickCount = useGameSelector((s) => s.tickCount);

  const storeRef = useRef(getGameStore());
  storeRef.current = getGameStore();

  useEffect(() => {
    startGameRuntime();
    return () => stopGameRuntime();
  }, []);

  useEffect(() => {
    const app = {
      get state() {
        const s = getGameStore() as unknown as GameState;
        return {
          screen: s.screen,
          playerLane: s.playerLane,
          playerPosition: s.playerPosition,
          obstacles: s.obstacles,
          shards: s.shards,
          score: s.score,
          energy: s.energy,
          lives: s.lives,
          paused: s.paused,
          gameOver: s.gameOver,
          speed: s.speed,
          tickCount: s.tickCount,
        };
      },
      get actions() {
        const a = storeRef.current;
        return {
          startGame: a.startGame,
          pauseGame: a.pauseGame,
          resumeGame: a.resumeGame,
          abortGame: a.abortGame,
          openSettings: a.openSettings,
          closeSettings: a.closeSettings,
          moveLeft: a.moveLeft,
          moveRight: a.moveRight,
          tick: a.tick,
          resetGame: a.resetGame,
          saveSettings: a.saveSettings,
        };
      },
    };
    (window as any).app = app;
    (globalThis as any).app = app;
  }, []);

  const handleStartSequence = useCallback(() => {
    storeRef.current.startGame();
  }, []);

  const handleResumeLink = useCallback(() => {
    storeRef.current.resumeGame();
  }, []);

  const handleAbortRun = useCallback(() => {
    storeRef.current.abortGame();
  }, []);

  const handleMonitorHeart = useCallback(() => {
    // no-op or analytics
  }, []);

  const handleBolt = useCallback(() => {
    // no-op or analytics
  }, []);

  const handleSettings = useCallback(() => {
    storeRef.current.openSettings();
  }, []);

  const handleResetPreferences = useCallback(() => {
    storeRef.current.resetGame();
  }, []);

  const handleReturnToGame = useCallback(() => {
    storeRef.current.closeSettings();
  }, []);

  const handleSaveAndClose = useCallback(() => {
    storeRef.current.saveSettings();
  }, []);

  const handlePrivacyProt = useCallback(() => {
    // no-op placeholder
  }, []);

  const handleSysRegs = useCallback(() => {
    // no-op placeholder
  }, []);

  const gameplayActions = {
    'start-sequence-1': handleStartSequence,
    'resume-link-2': handleResumeLink,
    'abort-run-3': handleAbortRun,
  };

  const settingsActions = {
    'monitor-heart-1': handleMonitorHeart,
    'bolt-2': handleBolt,
    'settings-3': handleSettings,
    'reset-preferences-4': handleResetPreferences,
    'return-to-game-5': handleReturnToGame,
    'save-and-close-6': handleSaveAndClose,
    'privacy-prot-1': handlePrivacyProt,
    'sys-regs-2': handleSysRegs,
  };

  const runtime = {
    player: { lane: playerLane, position: playerPosition },
    obstacles,
    shards,
    score,
    energy,
    lives,
    paused,
  };

  return (
    <div
      data-setfarm-root="circuitrush-lite-fixcheck"
      data-testid="setfarm-app-root"
      className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-slate-50"
    >
      {screen === 'gameplay' && !gameOver && (
        <GameplayCircuitrushLiteFixcheck
          actions={gameplayActions}
          runtime={runtime}
        />
      )}
      {screen === 'settings' && (
        <GameSettingsCircuitrushLiteFixcheck actions={settingsActions} />
      )}
      {(screen === 'menu' || gameOver) && (
        <div className="flex flex-col items-center justify-center min-h-screen w-full">
          <h1 className="text-4xl font-bold mb-8">CircuitRush Lite</h1>
          <button
            data-action-id="start-sequence-1"
            onClick={handleStartSequence}
            className="px-6 py-3 bg-primary text-on-primary-fixed rounded font-bold"
          >
            Start Game
          </button>
          <button
            data-action-id="settings-3"
            onClick={handleSettings}
            className="mt-4 px-6 py-3 bg-surface-container-high text-on-surface rounded font-bold"
          >
            Settings
          </button>
          {gameOver && (
            <p className="mt-4 text-error text-xl">Game Over — Score: {score}</p>
          )}
        </div>
      )}
    </div>
  );
}
