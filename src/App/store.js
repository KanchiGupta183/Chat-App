import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "../features/chatSlices";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});
