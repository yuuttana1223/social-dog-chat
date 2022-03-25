import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { push, set } from "firebase/database";
import { messagesRef } from "src/firebase/config";
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

export const createAsyncMessage = createAsyncThunk(
  "message/create",
  async ({ content, username }: Omit<Message, "key">) => {
    const newMessageRef = push(messagesRef);
    set(newMessageRef, {
      content,
      username,
    });
  }
);

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createAsyncMessage.fulfilled, () => {
      console.log("createAsyncMessage.fulfilled");
    });
    builder.addCase(createAsyncMessage.rejected, () => {
      console.error("createAsyncMessage.rejected");
    });
  },
});

export const { setMessages } = messageSlice.actions;

export const selectMessages = (state: RootState) => state.message.messages;

export const messageReducer = messageSlice.reducer;
