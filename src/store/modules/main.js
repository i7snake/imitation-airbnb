import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
      isFixed: false,
      topAlpha: false,
    },
  },
  reducers: {
    setHeaderConfigAction: (state, action) => {
      state.headerConfig = action.payload;
    },
  },
});

export const { setHeaderConfigAction } = mainSlice.actions;

export default mainSlice.reducer;
