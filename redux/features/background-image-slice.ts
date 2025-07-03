import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BackgroundImageState {
  backgroundImage: string;
}

const initialState = {
  backgroundImage: '/images/wall-2.webp',
} as BackgroundImageState;

export const backgroundImage = createSlice({
  name: 'backgroundImage',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<string>) => {
      state.backgroundImage = action.payload;
    },
  },
});

export const { setImage } = backgroundImage.actions;
export default backgroundImage.reducer;
