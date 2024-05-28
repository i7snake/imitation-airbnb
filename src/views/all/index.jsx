import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fecthAllListAction } from "@/store/modules/all/actions";
import { setHeaderConfigAction } from "@/store/modules/main";

import AllWrapper from "./style";
import AllFilter from "./c-cnps/all-filter";
import AllRooms from "./c-cnps/all-rooms";
import AllPageination from "./c-cnps/all-pageination";

const All = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fecthAllListAction());
    dispatch(setHeaderConfigAction({ isFixed: true, topAlpha: false }));
  }, [dispatch]);

  return (
    <AllWrapper>
      <AllFilter />
      <AllRooms />
      <AllPageination />
    </AllWrapper>
  );
});

export default All;
