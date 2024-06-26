import React from "react";
import "./page-title.css";

const PageTitle = (props) => {
  return (
    <h1 className="fs-3 text-center py-4 mb-5 text-capitalize">
      {props.title}
    </h1>
  );
};

export default PageTitle;
