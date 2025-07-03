import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StatusState {
  soundLevel: number;
  brightnessLevel: number;
}

const initialState = {
  soundLevel: 50,
  brightnessLevel: 100,
} as StatusState;

export const status = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setSoundLevel: (state, action: PayloadAction<number>) => {
      state.soundLevel = action.payload;
    },

    setBrightnessLevel: (state, action: PayloadAction<number>) => {
      state.brightnessLevel = action.payload;
    },
  },
});

export const { setBrightnessLevel, setSoundLevel } = status.actions;
export default status.reducer;
