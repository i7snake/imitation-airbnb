import PropTypes from "prop-types";
import React, { memo } from "react";
import HomeSectionV1Wrapper from "./style";
import SectionTitle from "@/components/section-title";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";

const HomeSectionV1 = memo((props) => {
  const { infoData } = props;
  return (
    <HomeSectionV1Wrapper>
      <SectionTitle title={infoData?.title} subtitle={infoData?.subtitle} />
      <SectionRooms roomList={infoData?.list} />
      <SectionFooter />
    </HomeSectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV1;
