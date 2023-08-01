// messagesSlice.js

import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    message: [],
  },
  reducers: {
    addTwoMessages: (state, action) => {
      // Combine existing messages with the new ones from the action payload
      const updatedMessages = [ ...action.payload];

      // Remove items from the beginning if the length exceeds 30
      if (updatedMessages.length > 30) {
        updatedMessages.splice(0, updatedMessages.length - 30);
      }

      return {
        ...state,
        message: updatedMessages,
      };
    },
  },
});

export const { addTwoMessages } = messagesSlice.actions;
export default messagesSlice.reducer;
