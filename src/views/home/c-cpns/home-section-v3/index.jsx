import PropTypes from "prop-types";
import React, { memo } from "react";
import HomeSectionV3Wrapper from "./style";
import SectionTitle from "@/components/section-title";
import RoomItem from "@/components/room-item";
import ScrollView from "@/base-ui/Scroll-view";
import SectionFooter from "@/components/section-footer";

const HomeSectionV3 = memo((props) => {
  const { infoData } = props;
  return (
    <HomeSectionV3Wrapper>
      <SectionTitle
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionTitle>

      <div className="room-list">
        <ScrollView>
          {infoData?.list?.map((room, index) => {
            return <RoomItem key={room.id} itemData={room} itemWidth="20%" />;
          })}
        </ScrollView>
      </div>
      <SectionFooter name="puls" />
    </HomeSectionV3Wrapper>
  );
});

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV3;
