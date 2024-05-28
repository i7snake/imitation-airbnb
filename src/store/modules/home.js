import {
  getGoodpriceData,
  getHighscoreData,
  getDiscountData,
  getHotrecommenddestData,
  getLongforData,
  getPlusData,
} from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 异步请求Action
// export const fetchGoodpriceInfoAction = createAsyncThunk(
//   "home/fetchGoodpriceInfo",
//   async () => {
//     const res = await getGoodpriceData();
//     return res;
//   }
// );

export const fetchGoodpriceInfoAction = createAsyncThunk(
  "home/fetchGoodpriceInfo",
  (payload, { getState, dispatch }) => {
    getGoodpriceData().then((res) => {
      dispatch(setGoodpriceInfoAction(res));
    });
    getHighscoreData().then((res) => {
      dispatch(setHighscoreInfoAction(res));
    });
    getDiscountData().then((res) => {
      dispatch(setDiscountInfoAction(res));
    });
    getHotrecommenddestData().then((res) => {
      dispatch(setHotrecommenddestInfoAction(res));
    });
    getLongforData().then((res) => {
      dispatch(setLongforInfoAction(res));
    });
    getPlusData().then((res) => {
      dispatch(setPlusInfoAction(res));
    });
  }
);

// 2.reduxjs/toolkit 方式
const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodpriceInfo: {},
    highscoreInfo: {},
    discountInfo: {},
    hotrecommenddestInfo: {},
    longforInfo: {},
    plusInfo: {},
  },
  reducers: {
    setGoodpriceInfoAction: (state, action) => {
      state.goodpriceInfo = action.payload;
    },
    setHighscoreInfoAction: (state, action) => {
      state.highscoreInfo = action.payload;
    },
    setDiscountInfoAction: (state, action) => {
      state.discountInfo = action.payload;
    },
    setHotrecommenddestInfoAction: (state, action) => {
      state.hotrecommenddestInfo = action.payload;
    },
    setLongforInfoAction: (state, action) => {
      state.longforInfo = action.payload;
    },
    setPlusInfoAction: (state, action) => {
      state.plusInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchGoodpriceInfoAction.fulfilled, (state, action) => {
    //   state.goodpriceInfo = action.payload;
    // });
  },
});

export const {
  setGoodpriceInfoAction,
  setHighscoreInfoAction,
  setDiscountInfoAction,
  setHotrecommenddestInfoAction,
  setLongforInfoAction,
  setPlusInfoAction,
} = homeSlice.actions;

export default homeSlice.reducer;
