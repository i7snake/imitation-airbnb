import React, { memo } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import Pagination from "@mui/material/Pagination";
import PaginationWrapper from "./style";
import { fecthAllListAction } from "@/store/modules/all/actions";

const AllPageination = memo(() => {
  const { roomsList, totalCount, currentPage } = useSelector(
    (state) => ({
      roomsList: state.all.roomsList,
      totalCount: state.all.totalCount,
      currentPage: state.all.currentPage,
    }),
    shallowEqual
  );

  // 计算小算法
  const totalPage = Math.ceil(totalCount / 20); //向上取整
  const startPage = currentPage * 20 + 1;
  const endPage = (currentPage + 1) * 20;

  // 点击逻辑
  const dispatch = useDispatch();
  function handleChange(event, value) {
    window.scrollTo(0, 0); // 页面回到顶部
    dispatch(fecthAllListAction(value - 1));
  }

  return (
    <PaginationWrapper>
      {roomsList.length > 0 && (
        <div className="info">
          <Pagination count={totalPage} onChange={handleChange} />
          <div className="desc">
            第 {startPage} - {endPage} 个房源, 共超过 {totalCount} 个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

export default AllPageination;
