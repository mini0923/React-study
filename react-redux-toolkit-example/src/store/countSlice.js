import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: 'countSlice',
  initialState: { num: 0 },
  // 액션 타입별로 Reducer 함수 정의
  reducers: {
    UP: (state, action) => {
      console.log(action);
      
      // step 만큼 num의 값을 증가시키기
      state.num += action.payload;
    }

  }
});