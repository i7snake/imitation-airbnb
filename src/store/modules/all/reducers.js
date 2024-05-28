import * as actionTypes from "./constant";

// 1.初始方式
const initialState = {
  currentPage: 0, // 当前页
  roomsList: [], // 房屋列表
  totalCount: 0, // 总数量

  // 是否显示loading
  isLoading: false,
};

const allReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ALL_LIST:
      return { ...state, roomsList: action.roomsList };

    case actionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case actionTypes.SET_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };

    case actionTypes.SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

export default allReducer;
