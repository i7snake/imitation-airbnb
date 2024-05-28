import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import isEmptyObj from "@/utils/is-empty-obj";
import { fetchGoodpriceInfoAction } from "@/store/modules/home";
import { setHeaderConfigAction } from "@/store/modules/main";
import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import HomeSectionV3 from "./c-cpns/home-section-v3";
import HomeLongfor from "./c-cpns/home-longfor";

const Home = memo(() => {
  // 2.获取redux中的数据
  const {
    goodpriceInfo,
    highscoreInfo,
    discountInfo,
    hotrecommenddestInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodpriceInfo: state.home.goodpriceInfo,
      highscoreInfo: state.home.highscoreInfo,
      discountInfo: state.home.discountInfo,
      hotrecommenddestInfo: state.home.hotrecommenddestInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );

  // 1.发起网络请求
  const dispatch = useDispatch();
  useEffect(() => {
    // 获取首页数据
    dispatch(fetchGoodpriceInfoAction());
    // 是否固定header
    dispatch(setHeaderConfigAction({ isFixed: true, topAlpha: true }));
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyObj(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyObj(hotrecommenddestInfo) && (
          <HomeSectionV2 infoData={hotrecommenddestInfo} />
        )}
        {isEmptyObj(longforInfo) && <HomeLongfor infoData={longforInfo} />}

        {isEmptyObj(goodpriceInfo) && (
          <HomeSectionV1 infoData={goodpriceInfo} />
        )}
        {isEmptyObj(highscoreInfo) && (
          <HomeSectionV1 infoData={highscoreInfo} />
        )}
        {isEmptyObj(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
