import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";
import IconMap from "@/assets/svg/icon_map";
import IconMenu from "@/assets/svg/icon_menu";
import IconAvatar from "@/assets/svg/icon_avatar";

const HeaderRight = memo(() => {
  const [isShowPanel, setIsShowPanel] = useState(false);

  // 处理副作用 点击windown时关闭面板
  useEffect(() => {
    function handleClick(e) {
      setIsShowPanel(false);
    }
    window.addEventListener("click", handleClick, true);
    return () => {
      window.removeEventListener("click", handleClick, true);
    };
  }, []);

  // 处理面版显示
  function handleShowPanelClick() {
    setIsShowPanel(true);
  }

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconMap />
        </span>
      </div>

      <div className="profile" onClick={handleShowPanelClick}>
        <IconMenu />
        <IconAvatar />

        {isShowPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
