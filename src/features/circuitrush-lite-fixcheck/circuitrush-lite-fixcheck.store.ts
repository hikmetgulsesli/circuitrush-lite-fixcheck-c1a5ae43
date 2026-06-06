export type GameScreen = 'menu' | 'gameplay' | 'settings' | 'gameover';

export interface Obstacle {
  id: string;
  lane: number;
  position: number;
}

export interface Shard {
  id: string;
  lane: number;
  position: number;
}

export interface GameState {
  screen: GameScreen;
  playerLane: number;
  playerPosition: number;
  obstacles: Obstacle[];
  shards: Shard[];
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
  gameOver: boolean;
  speed: number;
  tickCount: number;
}

export interface GameActions {
  startGame: () => void;
  pauseGame: () => void;
  resumeGame: () => void;
  abortGame: () => void;
  openSettings: () => void;
  closeSettings: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  tick: () => void;
  resetGame: () => void;
  saveSettings: () => void;
}

export type GameStore = GameState & GameActions;

const LANES = 3;
const INITIAL_SPEED = 2;
const MAX_ENERGY = 100;
const MAX_LIVES = 3;

function generateId() {
  return Math.random().toString(36).slice(2);
}

function createInitialState(): GameState {
  return {
    screen: 'menu',
    playerLane: 1,
    playerPosition: 0,
    obstacles: [],
    shards: [],
    score: 0,
    energy: MAX_ENERGY,
    lives: MAX_LIVES,
    paused: false,
    gameOver: false,
    speed: INITIAL_SPEED,
    tickCount: 0,
  };
}

let state: GameState = createInitialState();
const listeners = new Set<() => void>();

function setState(partial: Partial<GameState> | ((s: GameState) => Partial<GameState>)) {
  const next = typeof partial === 'function' ? partial(state) : partial;
  state = { ...state, ...next };
  listeners.forEach((l) => l());
}

function getState(): GameState {
  return state;
}

export function getGameStore(): GameStore {
  // For React compatibility: return current state + actions
  return {
    ...state,
    startGame: () =>
      setState({
        ...createInitialState(),
        screen: 'gameplay',
      }),
    pauseGame: () => setState({ paused: true }),
    resumeGame: () => setState({ paused: false }),
    abortGame: () => setState({ screen: 'menu', paused: false, gameOver: false }),
    openSettings: () => setState({ screen: 'settings' }),
    closeSettings: () => setState({ screen: 'menu' }),
    moveLeft: () =>
      setState((s) => ({
        playerLane: Math.max(0, s.playerLane - 1),
      })),
    moveRight: () =>
      setState((s) => ({
        playerLane: Math.min(LANES - 1, s.playerLane + 1),
      })),
    tick: () => {
      const current = getState();
      if (current.paused || current.gameOver || current.screen !== 'gameplay') {
        return;
      }

      const newTick = current.tickCount + 1;
      let newObstacles = current.obstacles
        .map((o) => ({ ...o, position: o.position + current.speed }))
        .filter((o) => o.position < 100);

      let newShards = current.shards
        .map((s) => ({ ...s, position: s.position + current.speed }))
        .filter((s) => s.position < 100);

      // Spawn obstacles
      if (newTick % 40 === 0) {
        newObstacles.push({
          id: generateId(),
          lane: Math.floor(Math.random() * LANES),
          position: -10,
        });
      }

      // Spawn shards
      if (newTick % 60 === 0) {
        newShards.push({
          id: generateId(),
          lane: Math.floor(Math.random() * LANES),
          position: -10,
        });
      }

      // Collision detection
      let lives = current.lives;
      let energy = current.energy;
      let score = current.score;
      let gameOver: boolean = current.gameOver;

      const remainingObstacles: Obstacle[] = [];
      let collided = false;
      for (const obs of newObstacles) {
        if (
          obs.lane === current.playerLane &&
          obs.position >= current.playerPosition - 5 &&
          obs.position <= current.playerPosition + 5
        ) {
          collided = true;
        } else {
          remainingObstacles.push(obs);
        }
      }

      if (collided) {
        lives -= 1;
        energy = Math.max(0, energy - 20);
        if (lives <= 0) {
          gameOver = true;
        }
        newObstacles = remainingObstacles;
      }

      const remainingShards: Shard[] = [];
      for (const shard of newShards) {
        if (
          shard.lane === current.playerLane &&
          shard.position >= current.playerPosition - 5 &&
          shard.position <= current.playerPosition + 5
        ) {
          score += 10;
          energy = Math.min(MAX_ENERGY, energy + 10);
        } else {
          remainingShards.push(shard);
        }
      }
      newShards = remainingShards;

      // Passive score increase
      score += 1;

      setState({
        tickCount: newTick,
        obstacles: remainingObstacles,
        shards: remainingShards,
        lives,
        energy,
        score,
        gameOver,
        speed: INITIAL_SPEED + Math.floor(score / 500),
      });
    },
    resetGame: () => setState(createInitialState()),
    saveSettings: () => setState({ screen: 'menu' }),
  };
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getGameState(): GameState {
  return getState();
}

export function dispatchTick() {
  const store = getGameStore();
  store.tick();
}
