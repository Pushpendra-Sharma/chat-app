import { create } from 'zustand';

type ThemeT = 'light' | 'dark' | 'system';

interface AppState {
  theme: ThemeT;
}

export const useAppStore = create<AppState>()(set => ({
  theme: 'light',
  updateTheme: (value: ThemeT) => set(state => ({ ...state, theme: value })),
}));
