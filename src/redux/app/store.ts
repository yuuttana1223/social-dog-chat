import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userReducer } from "src/redux/slices/userSlice";
import { messageReducer } from "src/redux/slices/messageSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
