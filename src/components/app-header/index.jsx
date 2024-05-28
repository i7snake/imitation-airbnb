import React, { memo, useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";
import { ThemeProvider } from "styled-components";

import { HeaderWrapper, SerachBarWrapper } from "./style";
import HeaderLeft from "./c-cpns/header-left";
import HeaderCenter from "./c-cpns/header-center";
import HeaderRight from "./c-cpns/header-right";
import useScrollPosition from "@/hooks/useScrollPosition";

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false);

  // 获取redux数据 判断头部是否需要固定
  const { isFixed, topAlpha } = useSelector(
    (state) => ({
      isFixed: state.main.headerConfig.isFixed,
      topAlpha: state.main.headerConfig.topAlpha,
    }),
    shallowEqual
  );

  // 监听滚动改变搜索状态
  const { scrollY } = useScrollPosition();
  const prevY = useRef(0);
  // 在正常情况的情况下(搜索框没有弹出来), 不断记录值
  if (!isSearch) prevY.current = scrollY;
  // 在弹出搜索功能的情况, 滚动的距离大于之前记录的距离的30
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false);

  // 顶部透明度
  const isAlpha = topAlpha && scrollY === 0;

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClick={(e) => setIsSearch(!isSearch)}
            />
            <HeaderRight />
          </div>
          <SerachBarWrapper isSearch={isAlpha || isSearch}></SerachBarWrapper>
        </div>
        {isSearch && (
          <div className="cover" onClick={() => setIsSearch(!isSearch)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
