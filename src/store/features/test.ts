import { Test } from "@/models/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type TestDataStateType = {
  data: Test[];
  loading: boolean;
};

const initialState: TestDataStateType = {
  data: [],
  loading: true,
};

export const testSlice = createSlice({
  name: "test",
  initialState,

  reducers: {
    setData: (state, action: PayloadAction<Test[]>) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

export const testActions = testSlice.actions;

export const selectTest = (state: RootState) => state.test as TestDataStateType;

export default testSlice.reducer;
