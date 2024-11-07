import { configureStore } from "@reduxjs/toolkit";
import { countSlice } from "./countSlice";

export const store = configureStore({
  reducer : {
    // 각 슬라이스의 reducer가 들어가는 위치
    // 슬라이스 이름 : reducer 함수
    counter : countSlice.reducer
  }
});