import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StatusState {
  soundLevel: number;
  brightnessLevel: number;
}

const MIN_BRIGHTNESS = 27; 

const initialState: StatusState = {
  soundLevel: 50,
  brightnessLevel: 100,
};

export const status = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setSoundLevel: (state, action: PayloadAction<number>) => {
      state.soundLevel = Math.max(0, Math.min(100, action.payload));
    },

    setBrightnessLevel: (state, action: PayloadAction<number>) => {
      state.brightnessLevel = Math.max(MIN_BRIGHTNESS, action.payload);
    },
  },
});

export const { setBrightnessLevel, setSoundLevel } = status.actions;
export default status.reducer;
