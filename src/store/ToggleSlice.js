import { createSlice } from "@reduxjs/toolkit";

const ToggleSlice = createSlice({
  name: "youtube",
  initialState: {
    isMenu: true,
  },
  reducers: {
    toggleChange: (state) => {
      state.isMenu = !state.isMenu;
    },
    closeToggle: (state) => {
      state.isMenu = false;
    },
    openToggle: (state) => {
      state.isMenu = true;
    },
  },
});

export const { toggleChange, closeToggle,openToggle } = ToggleSlice.actions;
export default ToggleSlice.reducer;
