import { createSlice } from '@reduxjs/toolkit';

const theme = createSlice({
  name: 'theme',
  initialState: {
    value: 'light',
  },
  reducers: {
    light: (state) => {
      return {
        value: 'light'
      };
    },
    dark: (state) => {
      return {
        value: 'dark'
      }
    },
    system: (state) => {
      return {
        value: 'system'
      }
    }
  },
});

export const { light, dark, system } = theme.actions;
export default theme.reducer;
