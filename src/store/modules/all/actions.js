import { getAllListData } from "@/services/index";
import * as actionsTypes from "./constant";

export const changeAllList = (roomsList) => ({
  type: actionsTypes.SET_ALL_LIST,
  roomsList,
});

export const changeCurrentPage = (currentPage) => ({
  type: actionsTypes.SET_CURRENT_PAGE,
  currentPage,
});

export const changeTotalPageCount = (totalCount) => ({
  type: actionsTypes.SET_TOTAL_COUNT,
  totalCount,
});

export const changeIsLoading = (isLoading) => ({
  type: actionsTypes.SET_IS_LOADING,
  isLoading,
});

export const fecthAllListAction = (currentPage = 0) => {
  return async (dispatch, getState) => {
    // 修改当前页码 并发送请求
    dispatch(changeCurrentPage(currentPage));

    dispatch(changeIsLoading(true));
    const res = await getAllListData(currentPage * 20);
    dispatch(changeIsLoading(false));

    // 保存list和总数
    const list = res.list;
    const totalCount = res.totalCount;
    dispatch(changeAllList(list));
    dispatch(changeTotalPageCount(totalCount));
  };
};
