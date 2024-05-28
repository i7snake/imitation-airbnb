import React, { memo, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import IndicatorWrapper from "./style";

const Indeicator = memo((props) => {
  const { currentIndex = 0 } = props;
  const contentRef = useRef();

  useEffect(() => {
    // 1.获取currentIndex对应的item
    const item = contentRef.current.children[currentIndex];
    const itemLeft = item.offsetLeft;
    const itemWidth = item.clientWidth;

    // 2.获取content的宽度
    const contentWidth = contentRef.current.clientWidth;
    const contentScrollWidth = contentRef.current.scrollWidth;

    // 3.获取currentIndex要滚动的距离
    let scrollLeft = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;

    // 4.特殊情况处理
    if (scrollLeft < 0) scrollLeft = 0; // 左边界
    if (scrollLeft + contentWidth > contentScrollWidth)
      scrollLeft = contentScrollWidth - contentWidth; // 右边界

    // 开始滚动
    contentRef.current.style.transform = `translate(${-scrollLeft}px)`;
  }, [currentIndex]);

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indeicator.prototype = {
  currentIndex: PropTypes.number,
};

export default Indeicator;
