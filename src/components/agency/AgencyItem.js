import React from "react";
import "./agency.css";
import { Link, useNavigate } from "react-router-dom";

const AgencyItem = (data) => {
  // console.log(data);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/agentlik/${data.id}`);
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
      <div
        className="card agency-card"
        style={{ height: "31rem" }}
        onClick={handleClick}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/agency/${data.image}`}
          className="card-img-top"
          alt={data.title}
          style={{ height: "15rem", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {data.offer} təklif
          </h6>
          <p className="card-text">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AgencyItem;
