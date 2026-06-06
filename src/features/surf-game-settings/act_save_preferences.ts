import { getGameStore } from '../circuitrush-lite-fixcheck/circuitrush-lite-fixcheck.store';

export function actSavePreferences() {
  const store = getGameStore();
  store.saveSettings();
}
