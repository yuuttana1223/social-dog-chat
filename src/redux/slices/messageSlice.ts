import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/redux/app/store";

type Message = {
  key: string;
  content: string;
  username: string;
};

type MessageState = {
  messages: Message[];
};

const initialState: MessageState = {
  messages: [],
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = [...action.payload];
    },
  },
});

export const { setMessages } = messageSlice.actions;

export const selectMessages = (state: RootState) => state.message.messages;

export const messageReducer = messageSlice.reducer;
