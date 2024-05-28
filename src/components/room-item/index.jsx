import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import classnames from "classnames";

import { Carousel } from "antd";

import RoomItemWrapper from "./style";
import Rating from "@mui/material/Rating";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indeicator from "@/base-ui/Indicator";

const RoomItem = memo((props) => {
  const { itemData, itemWidth, itemClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef();

  function handleBtnClick(isRight, e) {
    // 上一个面板/下一个面板
    isRight ? carouselRef.current.next() : carouselRef.current.prev();

    // 最新的索引
    let newIndex = isRight ? currentIndex + 1 : currentIndex - 1;
    const length = itemData.picture_urls.length;
    if (newIndex < 0) newIndex = length - 1;
    if (newIndex > length - 1) newIndex = 0;
    setCurrentIndex(newIndex);

    //阻止事件冒泡
    e.stopPropagation();
  }

  // 判断展示轮播图还是展示图片
  const coverEl = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );

  const swiperEl = (
    <div className="swiper">
      <div className="control">
        <div className="btn left" onClick={(e) => handleBtnClick(false, e)}>
          <IconArrowLeft height="30" width="30" />
        </div>
        <div className="btn right" onClick={(e) => handleBtnClick(true, e)}>
          <IconArrowRight height="30" width="30" />
        </div>
      </div>
      <div className="indicator">
        <Indeicator currentIndex={currentIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span
                  className={classnames("dot", {
                    active: index === currentIndex,
                  })}
                ></span>
              </div>
            );
          })}
        </Indeicator>
      </div>
      <Carousel dots={false} ref={carouselRef}>
        {itemData?.picture_urls?.map((item, index) => (
          <div className="cover" key={item}>
            <img src={item} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );

  // 事件监听
  function itemClickHandle() {
    if (itemClick) itemClick(itemData);
  }

  return (
    <RoomItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {!itemData.picture_urls ? coverEl : swiperEl}
        <div className="desc">{itemData.verify_info?.messages?.join("·")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
      </div>

      <div className="bottom">
        <Rating
          value={itemData.star_rating ?? 5}
          precision={0.1}
          readOnly
          sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
        />
        <span className="count">{itemData.reviews_count}</span>
        {itemData.bottom_info && (
          <span className="extra">·{itemData.bottom_info?.content}</span>
        )}
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
};

export default RoomItem;
