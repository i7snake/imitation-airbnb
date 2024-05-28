import styled from "styled-components";

// react导入本地图片(背景或img)
// import bgCover from "@/assets/img/cover_01.jpeg";
// background: url(${bgCover}) center/cover;

const HomeBannerWrapper = styled.div`
  height: 529px;
  background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover;
`;

export default HomeBannerWrapper;
