import { configureStore } from "@reduxjs/toolkit";
import ToggleReduce from "./ToggleSlice";
import messagesReducer from "./MessageSlice";
import allmessages from "./MessageData";
const store = configureStore({
  reducer: {
    toggle: ToggleReduce,
    messages: messagesReducer,
    allMessages: allmessages,
  },
});
export default store;
