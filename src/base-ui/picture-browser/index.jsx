import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import classNames from "classnames";

import PictureBrowserWrapper from "./style";
import IconClose from "@/assets/svg/icon-close";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconTriangleArrowTop from "@/assets/svg/icon-triangle-arrow-top";
import IconTriangleArrowBottom from "@/assets/svg/icon-triangle-arrow-bottom";
import Indeicator from "@/base-ui/Indicator";

const PictureBrowser = memo((props) => {
  const { pictureUrls, clickClose } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRight, setIsRight] = useState(true);
  const [showList, setShowList] = useState(true);

  // 图片蒙版显示 取消滚动条功能
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // 点击蒙版关闭图片浏览器
  function handleClickClose() {
    if (clickClose) clickClose();
  }

  function handleBntClick(isRight = true) {
    let newIndex = isRight ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = pictureUrls.length - 1;
    if (newIndex > pictureUrls.length - 1) newIndex = 0;
    setCurrentIndex(newIndex);
    setIsRight(isRight);
  }

  function handlePicClick(index) {
    setIsRight(index > currentIndex);
    setCurrentIndex(index);
  }

  return (
    <PictureBrowserWrapper isRight={isRight} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={handleClickClose}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={() => handleBntClick(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={() => handleBntClick(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              timeout={300}
              classNames="pic"
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}
              </span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle">
              <span onClick={() => setShowList(!showList)}>
                {showList ? "隐藏" : "显示"}照片列表
              </span>
              {showList ? (
                <IconTriangleArrowBottom />
              ) : (
                <IconTriangleArrowTop />
              )}
            </div>
          </div>
          <div className="list">
            <Indeicator currentIndex={currentIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={classNames("item", {
                      active: index === currentIndex,
                    })}
                    key={index}
                    onClick={(e) => handlePicClick(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indeicator>
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
};

export default PictureBrowser;
