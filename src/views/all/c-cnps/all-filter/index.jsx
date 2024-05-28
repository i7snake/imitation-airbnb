import React, { memo, useState } from "react";
import classnames from "classnames";

import FilterWrapper from "./style";
import filterData from "@/assets/data/filter_data.json";

const AllFilter = memo(() => {
  const [itemNames, setItemNames] = useState([]);
  function handleClick(item) {
    const newItemNames = [...itemNames];
    if (newItemNames.includes(item)) {
      // 取消选择
      newItemNames.splice(newItemNames.indexOf(item), 1);
    } else {
      // 选择
      newItemNames.push(item);
    }
    setItemNames(newItemNames);
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div
              onClick={(e) => handleClick(item)}
              className={classnames("item", {
                active: itemNames.includes(item),
              })}
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default AllFilter;
