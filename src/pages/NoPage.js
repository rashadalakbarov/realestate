import React from "react";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Bir önceki sayfaya git
  };

  return (
    <div
      style={{ height: "500px" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="container text-center">
        <h1 className="display-1">404</h1>
        <p className="lead">
          Bu səhifə tapılmadı. Yada səhifə artıq aktiv deyil
        </p>
        <button className="btn btn-primary" onClick={goBack}>
          Geri qayıt
        </button>
      </div>
    </div>
  );
};

export default NoPage;
