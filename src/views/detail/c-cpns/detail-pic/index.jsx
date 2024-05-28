import React, { memo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import DetailPicWrapper from "./style";
import PictureBrowser from "@/base-ui/picture-browser";

const DetailPic = memo((props) => {
  // 定义图片浏览器的点击状态
  const [isPicBrowserShow, setIsPicBrowserShow] = useState(false);

  // 从redux中获取数据
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );

  return (
    <DetailPicWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={(e) => setIsPicBrowserShow(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls?.slice(1, 5).map((item) => {
            return (
              <div
                className="item"
                key={item}
                onClick={(e) => setIsPicBrowserShow(true)}
              >
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="show-btn" onClick={(e) => setIsPicBrowserShow(true)}>
        显示照片
      </div>
      {isPicBrowserShow && (
        <PictureBrowser
          clickClose={() => setIsPicBrowserShow(false)}
          pictureUrls={detailInfo.picture_urls}
        />
      )}
    </DetailPicWrapper>
  );
});

DetailPic.propTypes = {};

export default DetailPic;
