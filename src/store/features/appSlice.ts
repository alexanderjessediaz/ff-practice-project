import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type AppSliceType = {
  dashboardCurrentUserId: string;
  dashboardUserShown: string;
};

const initialState: AppSliceType = {
  dashboardCurrentUserId: '',
  dashboardUserShown:'',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setDashboardUser: (state, action: PayloadAction<string>) => {
      state.dashboardCurrentUserId = action.payload;
    },
    setDashboardUserShown: (state, action: PayloadAction<string>) => {
      state.dashboardUserShown = action.payload;
    },
  },
});

export const appSliceActions = appSlice.actions;
export const appSliceReducer = appSlice.reducer;
