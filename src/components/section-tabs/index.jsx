import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import classNames from "classnames";

import SectionTabsWrapper from "./style";
import ScrollView from "@/base-ui/Scroll-view";

const SectionTabs = memo((props) => {
  const { tabNames = [], tabCallback } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClick(index, name) {
    setCurrentIndex(index);
    tabCallback(index, name);
  }

  return (
    <SectionTabsWrapper>
      <ScrollView>
        {tabNames.map((name, index) => (
          <div
            onClick={(e) => handleClick(index, name)}
            key={index}
            className={classNames("item", { active: index === currentIndex })}
          >
            {name}
          </div>
        ))}
      </ScrollView>
    </SectionTabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
};

export default SectionTabs;
