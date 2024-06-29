import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import agencies from "../../data/agency.json";
import Breadcrumb from "../../components/Breadcrumb";

const AgencyDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const agent = agencies.find((agent) => agent.id === parseInt(id));

  const defaults = [{ path: "/agentlikler", label: "Agentliklər" }];

  useEffect(() => {
    if (!agent) {
      navigate("/404");
    }
  }, [agent, navigate]);

  if (!agent) {
    return null; // Agent bulunamadığında boş bir bileşen döndür.
  }

  return (
    <>
      <Breadcrumb item={agent.title} default={defaults} />

      <div className="container">
        <h1 className="fs-4">{agent.title}</h1>
        <img
          src={`${process.env.PUBLIC_URL}/images/agency/${agent.image}`}
          alt={agent.title}
          style={{ width: "300px", height: "300px", objectFit: "cover" }}
        />
        <p>{agent.description}</p>
      </div>
    </>
  );
};

export default AgencyDetail;
