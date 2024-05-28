import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "@/components/room-item";
import RoomsWrapper from "./style";

const SectionRooms = memo((props) => {
  const { roomList, itemWidth = "25%" } = props;
  return (
    <RoomsWrapper>
      {roomList?.slice(0, 8)?.map((item, index) => {
        return <RoomItem key={item.id} itemData={item} itemWidth={itemWidth} />;
      })}
    </RoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
  itemWidth: PropTypes.string,
};

export default SectionRooms;
