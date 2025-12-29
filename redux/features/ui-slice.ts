import { createSlice } from '@reduxjs/toolkit';

interface UIState {
  showApplications: boolean;
  showStatusMenu: boolean;
}

const initialState: UIState = {
  showApplications: false,
  showStatusMenu: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // Applications grid
    openApplications: (state) => {
      state.showApplications = true;
    },
    closeApplications: (state) => {
      state.showApplications = false;
    },
    toggleApplications: (state) => {
      state.showApplications = !state.showApplications;
    },

    // ✅ Status menu (ADD THESE)
    toggleStatusMenu: (state) => {
      state.showStatusMenu = !state.showStatusMenu;
    },
    closeStatusMenu: (state) => {
      state.showStatusMenu = false;
    },
  },
});

export const {
  openApplications,
  closeApplications,
  toggleApplications,

  // ✅ EXPORT THESE
  toggleStatusMenu,
  closeStatusMenu,
} = uiSlice.actions;

export default uiSlice.reducer;
