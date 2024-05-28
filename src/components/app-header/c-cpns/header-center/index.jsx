import React, { memo, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { CenterWrapper } from "./style";
import IconSearch from "@/assets/svg/icon_serach";
import searchTitles from "@/assets/data/search_titles";
import SearchTabs from "./c-cpns/search-tabs";
import SearchSections from "./c-cpns/search-sections";

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const titles = searchTitles.map((item) => item.title);

  function handleSearchClick() {
    if (searchBarClick) searchBarClick();
  }

  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={handleSearchClick}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearch />
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setActiveIndex} />
          <div className="infos">
            <SearchSections
              searchInfos={searchTitles[activeIndex].searchInfos}
            />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

export default HeaderCenter;
