import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sinhVien: [],
};

const sinhvienSlice = createSlice({
  name: "sinhvien",
  initialState,
  reducers: {
    themSinhVien: (state, action) => {
      state.sinhVien.push(action.payload);
    },
  },
});

export const { themSinhVien } = sinhvienSlice.actions;

export default sinhvienSlice.reducer;
