import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  currentUser: "John", // Added current user
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      const newMessage = {
        id: Date.now(),
        text: action.payload.text,
        user: state.currentUser,
        timestamp: new Date().toLocaleTimeString(),
      };
      state.messages.push(newMessage);
    },
    receiveMessage: (state, action) => {
      const newMessage = {
        id: Date.now(),
        ...action.payload,
        timestamp: new Date().toLocaleTimeString(),
      };
      state.messages.push(newMessage);
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;

export default chatSlice.reducer;