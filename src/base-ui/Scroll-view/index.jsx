import React, { memo, useEffect, useRef, useState } from "react";
import ScrollViewWrapper from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const ScrollView = memo((props) => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const totalDistanceRef = useRef();

  // 组件渲染完毕, 判断是否显示右侧的按钮
  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth; // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance; //记录总距离
    if (totalDistance > 0) {
      setShowRight(true);
    }
  }, [props.children]);

  // 事件处理
  function handleControlClick(isRight) {
    const newIndex = isRight ? posIndex - 1 : posIndex + 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newEloffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newEloffsetLeft}px)`;
    setPosIndex(newIndex);
    // 是否继续显示右侧的按钮
    setShowRight(totalDistanceRef.current > newEloffsetLeft);

    setShowLeft(newEloffsetLeft > 0);
  }

  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div className="control left" onClick={(e) => handleControlClick(true)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={(e) => handleControlClick(false)}>
          <IconArrowRight />
        </div>
      )}

      {/* 插槽内容 */}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
