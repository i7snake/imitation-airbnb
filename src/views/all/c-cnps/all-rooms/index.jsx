import React, { memo, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import RoomsWrapper from "./style";
import RoomItem from "@/components/room-item";
import { setDetailInfoAction } from "@/store/modules/detail";

const AllRooms = memo(() => {
  // 从redux中获取roomsList等数据
  const { roomsList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomsList: state.all.roomsList,
      totalCount: state.all.totalCount,
      isLoading: state.all.isLoading,
    }),
    shallowEqual
  );

  // 点击房间跳转到详情页
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemClickHandle = useCallback(
    (itemData) => {
      dispatch(setDetailInfoAction(itemData)); // 跳转之前保存房间信息到redux
      // 跳转到详情页
      navigate("/detail");
    },
    [navigate, dispatch]
  );

  return (
    <RoomsWrapper>
      <h1 className="title">共有{totalCount}多个住宿</h1>
      <div className="list">
        {roomsList.map((item) => {
          return (
            <RoomItem
              key={item._id}
              itemData={item}
              itemWidth="20%"
              itemClick={itemClickHandle}
            />
          );
        })}
      </div>

      {/* 添加蒙版 */}
      {isLoading && <div className="mask"></div>}
    </RoomsWrapper>
  );
});

export default AllRooms;
