import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { push, set } from "firebase/database";
import { messagesRef } from "src/firebase/config";
import { RootState } from "src/redux/app/store";

export type Message = {
  key: string;
  content: string;
  username: string;
  createdAt: string;
  updatedAt: string;
};

type MessageState = {
  messages: Message[];
  isLoading: boolean;
  isError: boolean;
};

const initialState: MessageState = {
  messages: [],
  isLoading: false,
  isError: false,
};

export const createAsyncMessage = createAsyncThunk(
  "message/create",
  async ({ content, username }: Pick<Message, "content" | "username">) => {
    const newMessageRef = push(messagesRef);
    const dateString = new Date().toISOString();
    set(newMessageRef, {
      content,
      username,
      createdAt: dateString,
      updatedAt: dateString,
    });
  }
);

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessageState: (state, action: PayloadAction<MessageState>) => {
      state.messages = action.payload.messages;
      state.isLoading = action.payload.isLoading;
      state.isError = action.payload.isError;
    },
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = [...action.payload];
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
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

export const { setMessageState, setMessages, setIsLoading, setIsError } =
  messageSlice.actions;

export const selectMessageState = (state: RootState) => state.message.messages;
export const selectMessages = (state: RootState) => state.message.messages;
export const selectIsLoading = (state: RootState) => state.message.isLoading;
export const selectIsError = (state: RootState) => state.message.isError;

export const messageReducer = messageSlice.reducer;
