import React from "react";
import "./section-title.css";
import { Link } from "react-router-dom";

const SectionTitle = ({ title, url = null }) => {
  return (
    <div className="row">
      <div className="section-title bg-light">
        <h1 className="text-uppercase mb-0 fs-5">{title} Elanlar</h1>
        {url && (
          <Link to={url} className="text-decoration-none fs-6">
            Daha çox
          </Link>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
