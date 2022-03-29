import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/redux/app/store";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    isUsername: false,
  },
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.isUsername = true;
    },
  },
});

export const { setName } = userSlice.actions;

export const selectName = (state: RootState) => state.user.name;
export const selectIsUsername = (state: RootState) => state.user.isUsername;

export const userReducer = userSlice.reducer;
