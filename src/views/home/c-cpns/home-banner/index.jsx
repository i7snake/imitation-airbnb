import React, { memo } from "react";
import HomeBannerWrapper from "./style";

// react导入本地图片(背景或img)
// import bgCover from "@/assets/img/cover_01.jpeg";
//  <img src={bgCover} alt="" />

const HomeBanner = memo(() => {
  return <HomeBannerWrapper></HomeBannerWrapper>;
});

export default HomeBanner;
