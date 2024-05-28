import PropTypes from "prop-types";
import React, { memo } from "react";
import SectionTitleWrapper from "./style";

const sectionTitle = memo((props) => {
  const { title, subtitle } = props;
  return (
    <SectionTitleWrapper>
      <h2 className="title">{title}</h2>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </SectionTitleWrapper>
  );
});

sectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default sectionTitle;
