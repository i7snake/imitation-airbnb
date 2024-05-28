import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import DetailWrapper from "./style.";
import DetailInfos from "./c-cpns/detail-infos";
import DetailPic from "./c-cpns/detail-pic";
import { setHeaderConfigAction } from "@/store/modules/main";

const Detail = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeaderConfigAction({ isFixed: false, topAlpha: false }));
  }, [dispatch]);

  return (
    <DetailWrapper>
      <DetailPic />
      <DetailInfos />
    </DetailWrapper>
  );
});

export default Detail;
