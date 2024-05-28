import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";

import HomeSectionV2Wrapper from "./style";
import SectionRooms from "@/components/section-rooms";
import SectionTitle from "@/components/section-title";
import SectionTabs from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;

  const initName = Object.keys(infoData?.dest_list)[0];

  const [name, setName] = useState(initName);

  // 处理转换数据(tabs城市名称)
  const destAddressName = infoData?.dest_address?.map((item) => item.name);

  // 处理tabs切换
  const tabCallback = useCallback((index, name) => {
    setName(name);
  }, []);

  return (
    <HomeSectionV2Wrapper>
      {/* 折扣数据 */}
      <SectionTitle
        title={infoData?.title}
        subtitle={infoData?.subtitle}
      ></SectionTitle>
      <SectionTabs
        tabNames={destAddressName}
        tabCallback={tabCallback}
      ></SectionTabs>
      <SectionRooms
        roomList={infoData?.dest_list?.[name]}
        itemWidth="33.33%"
      ></SectionRooms>
      <SectionFooter name={name} />
    </HomeSectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
