import React from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "antd";
import "./page-header.styles.css";
function PageHeaderComponent({ title, subTitle, hasBack }) {
  const loc = useNavigate();

  const WithArrow = () => {
    return hasBack ? (
      <PageHeader
        key="header"
        className="site-page-header"
        onBack={() => loc(-1)}
        title={title}
        subTitle={subTitle}
      />
    ) : (
      <PageHeader
        key="header"
        className="site-page-header"
        title={title}
        subTitle={subTitle}
      />
    );
  };

  return [WithArrow()];
}

export default PageHeaderComponent;
