import type { GameState } from '../features/circuitrush-lite-fixcheck/circuitrush-lite-fixcheck.store';

export const defaultFixture: GameState = {
  screen: 'gameplay',
  playerLane: 1,
  playerPosition: 0,
  obstacles: [
    { id: 'obs-1', lane: 0, position: 30 },
    { id: 'obs-2', lane: 2, position: 60 },
  ],
  shards: [
    { id: 'shard-1', lane: 1, position: 45 },
  ],
  score: 120,
  energy: 80,
  lives: 3,
  paused: false,
  gameOver: false,
  speed: 2,
  tickCount: 0,
};

export const pausedFixture: GameState = {
  ...defaultFixture,
  paused: true,
};

export const gameOverFixture: GameState = {
  ...defaultFixture,
  gameOver: true,
  lives: 0,
};
