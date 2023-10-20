import { Settings } from "@/mui/context/setting.context";
import { createSlice } from "@reduxjs/toolkit";

interface UIType {
  mode: "light" | "dark";
  themeColor: "inherit" | "primary" | "secondary" | "default";
  contentWidth: "full" | "boxed";
}

type UISlice = {
  value: Settings;
};
const initialState = {
  value: {
    mode: "light",
    themeColor: "primary",
    contentWidth: "full",
  },
} as UISlice;
export const UISlice = createSlice({
  name: "UI-CONTENT",
  initialState,
  reducers: {
    reset: () => initialState,
    changMode: (state, action) => {
      state.value.mode = action.payload;
    },
  },
});
export const { reset, changMode } = UISlice.actions;
export default UISlice.reducer;
