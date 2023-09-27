import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Svr",
  activeStatus: true,
  role: "Sr. Dev",
};

export const accountInfoSlice = createSlice({
  name: "accountInfo",
  initialState,
  reducers: {
    setAccountInfo: (state, action) => {
      const payload = action?.payload || {};
      state.name = payload?.name || "";
      state.role = payload?.role || "";
    },
    setActiveStatus: (state, action) => {
      const activeStatus = !!action?.payload;
      state.activeStatus = activeStatus;
    },
  },
  extraReducers: {},
});

export const { setAccountInfo, setActiveStatus } = accountInfoSlice.actions;

export const selectAccountInfo = (state) => state.accountInfo;

export default accountInfoSlice.reducer;
