import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sinhVien: [],
  suaSinhVien: [],
};

const sinhvienSlice = createSlice({
  name: "sinhvien",
  initialState,
  reducers: {
    themSinhVien: (state, action) => {
      let index = state.sinhVien.findIndex(
        (item) => item.maSinhVien == action.payload.maSinhVien
      );
      if (index == -1) {
        state.sinhVien.push(action.payload);
      }
      state.suaSinhVien = [];
    },
    xoaSinhVien: (state, action) => {
      let index = state.sinhVien.findIndex(
        (item) => item.maSinhVien == action.payload
      );
      if (index != -1) {
        state.sinhVien.splice(index, 1);
      }
    },
    suaSinhVien: (state, action) => {
      state.suaSinhVien.unshift(action.payload);
    },
    capNhatSinhVien: (state, action) => {
      // console.log(action.payload);
      let index = state.sinhVien.findIndex(
        (item) => item.maSinhVien == action.payload.maSinhVien
      );
      if (index != -1) {
        state.sinhVien.splice(index, 1, action.payload);
      }
    },
  },
});

export const { themSinhVien, xoaSinhVien, suaSinhVien, capNhatSinhVien } =
  sinhvienSlice.actions;

export default sinhvienSlice.reducer;
