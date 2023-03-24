import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// DEFINE YOUR OWN TYPE AND DEFINE YOUR INITIAL STATE WITH THAT
const initialState: unknown = {};

export const sessionSlice = createSlice({
  name: 'session',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    newSession: (state, action: PayloadAction<unknown>) => {},
    deleteSession: (state) => {},
    updateSession: (state, action: PayloadAction<unknown>) => {},
  },
});

export const { newSession, deleteSession, updateSession } = sessionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectUser = (state: RootState) => state.session.user;

export default sessionSlice.reducer;
