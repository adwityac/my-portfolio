import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _, { max } from 'lodash';

import {
  Chrome,
  VSCode,
  Terminal,
  Spotify,
  AboutMe,
  Calculator,
} from '@/components/apps';

interface AllAppsState {
  id: string;
  title: string;
  imageSrc: string;
  isFavorite: boolean;
  isOpen: boolean;
  app: any; //FIXME:
  isMinimized: boolean;
  position: {
    x: number;
    y: number;
  };
  maximized: boolean;
  slug: string;
  zIndex: number;
}

const initialState: AllAppsState[] = [
  {
    id: _.uniqueId(),
    title: 'Chrome',
    slug: 'chrome',
    imageSrc: '/apps/chrome.png',
    isFavorite: true,
    isOpen: false,
    app: Chrome,
    isMinimized: false,
    position: {
      x: 0,
      y: 0,
    },
    maximized: false,
    zIndex: 0,
  },
  {
    id: _.uniqueId(),
    title: 'Calculator',
    slug: 'calculator',
    imageSrc: '/apps/calc.png',
    isFavorite: true,
    isOpen: false,
    app: Calculator,
    isMinimized: false,
    position: {
      x: 0,
      y: 0,
    },
    maximized: false,
    zIndex: 0,
  },
  {
    id: _.uniqueId(),
    title: 'About Me',
    slug: 'about-me',
    imageSrc: '/apps/user-home.png',
    isFavorite: true,
    isOpen: false,
    app: AboutMe,
    isMinimized: false,
    position: {
      x: 0,
      y: 0,
    },
    maximized: false,
    zIndex: 0,
  },
  {
    id: _.uniqueId(),
    title: 'VS Code',
    slug: 'code',
    imageSrc: '/apps/vscode.png',
    isFavorite: true,
    isOpen: false,
    app: VSCode,
    isMinimized: false,
    position: {
      x: 0,
      y: 0,
    },
    maximized: false,
    zIndex: 0,
  },
  {
    id: _.uniqueId(),
    title: 'Terminal',
    slug: 'terminal',
    imageSrc: '/apps/bash.png',
    isFavorite: true,
    isOpen: false,
    app: Terminal,
    isMinimized: false,
    position: {
      x: 0,
      y: 0,
    },
    maximized: false,
    zIndex: 0,
  },
  {
    id: _.uniqueId(),
    title: 'Spotify',
    slug: 'spotify',
    imageSrc: '/apps/spotify.png',
    isFavorite: true,
    isOpen: false,
    app: Spotify,
    isMinimized: false,
    position: {
      x: 0,
      y: 0,
    },
    maximized: false,
    zIndex: 0,
  },
  {
    id: _.uniqueId(),
    title: 'Settings',
    slug: 'settings',
    imageSrc: '/apps/gnome-control-center.png',
    isFavorite: true,
    isOpen: false,
    app: Chrome,
    isMinimized: false,
    position: {
      x: 0,
      y: 0,
    },
    maximized: false,
    zIndex: 0,
  },
];

export const appApps = createSlice({
  name: 'allApps',
  initialState,
  reducers: {
    openApp: (state, action: PayloadAction<string>) => {
      const findApp = state.find((app) => app.id === action.payload);
      if (findApp) {
        findApp.isOpen = true;
        findApp.isMinimized = false;
        const zIndexes = state
          .filter((app) => app.isOpen && !app.isMinimized)
          .map((app) => app.zIndex);
        const maxZIndex = max(zIndexes) || 0;
        findApp.zIndex = maxZIndex + 1;
      }
    },
    openAppByTitle: (state, action: PayloadAction<string>) => {
      const findApp = state.find((app) => app.slug === action.payload);
      if (findApp) {
        findApp.isOpen = true;
        findApp.isMinimized = false;
      }
    },
    closeApp: (state, action: PayloadAction<string>) => {
      const appToClose = state.find((app) => app.id === action.payload);
      if (appToClose) {
        appToClose.isOpen = false;
        appToClose.maximized = false;
        appToClose.position = {
          x: 0,
          y: 0,
        };
        appToClose.zIndex = 0;
      }
    },
    minimizeApp: (state, action: PayloadAction<string>) => {
      const appToMinimize = state.find((app) => app.id === action.payload);
      if (appToMinimize) {
        appToMinimize.isMinimized = true;
      }
    },
    changePosition: (
      state,
      action: PayloadAction<{ id: string; position: { x: number; y: number } }>,
    ) => {
      const appToChange = state.find((app) => app.id === action.payload.id);
      if (appToChange) {
        appToChange.position = action.payload.position;
      }
    },
    maximizeApp: (state, action: PayloadAction<string>) => {
      const appToMaximize = state.find((app) => app.id === action.payload);
      if (appToMaximize) {
        appToMaximize.maximized = !appToMaximize.maximized;
      }
    },
    zIndexApp: (state, action: PayloadAction<string>) => {
      const appToChange = state.find((app) => app.id === action.payload);
      if (appToChange) {
        const zIndexes = state
          .filter((app) => app.isOpen && !app.isMinimized)
          .map((app) => app.zIndex);
        const maxZIndex = max(zIndexes) || 0;
        appToChange.zIndex = maxZIndex + 1;
      }
    },
  },
});

export const {
  closeApp,
  openApp,
  minimizeApp,
  changePosition,
  maximizeApp,
  openAppByTitle,
  zIndexApp,
} = appApps.actions;
export default appApps.reducer;
