import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./features/test";

export const store = configureStore({
  reducer: {
    test: imageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
