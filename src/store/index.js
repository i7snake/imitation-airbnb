import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import allReducer from "./modules/all";
import detailReducer from "./modules/detail";
import mainReducer from "./modules/main";

const store = configureStore({
  reducer: {
    home: homeReducer,
    all: allReducer,
    detail: detailReducer,
    main: mainReducer,
  },
});

export default store;
