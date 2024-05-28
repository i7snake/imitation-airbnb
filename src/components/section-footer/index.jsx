import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import SectionFooterWrapper from "./style";
import IconMoreArrow from "@/assets/svg/icon_more_arrow";

const SectionFooter = memo((props) => {
  const { name } = props;
  let showNmae = "显示全部";
  if (name) {
    showNmae = `显示更多${name}房源`;
  }

  // 事件监听处理 跳转到全部房源页面(暂时是同一个页面)
  const navigate = useNavigate();
  function handleToAllHousesClick() {
    navigate("/all");
  }

  return (
    <SectionFooterWrapper color={name ? "#00848A" : "#000"}>
      <div className="info" onClick={handleToAllHousesClick}>
        <span className="text">{showNmae}</span>
        <IconMoreArrow />
      </div>
    </SectionFooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
