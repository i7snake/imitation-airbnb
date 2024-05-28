import PropTypes from "prop-types";
import React, { memo } from "react";
import HomeLongForWrap from "./style";
import SectionTitle from "@/components/section-title";
import LongforItem from "@/components/longfor-item";
import ScrollView from "@/base-ui/Scroll-view";

const HomeLongfor = memo((props) => {
  const { infoData } = props;
  return (
    <HomeLongForWrap>
      <SectionTitle
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionTitle>
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map((item, index) => {
            return <LongforItem itemData={item} key={index} />;
          })}
        </ScrollView>
      </div>
    </HomeLongForWrap>
  );
});

HomeLongfor.propTypes = {
  infoData: PropTypes.object,
};

export default HomeLongfor;
