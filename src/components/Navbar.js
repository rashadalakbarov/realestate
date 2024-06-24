import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Alqı-satqı
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Kirayə
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Agentliklər
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Yaşayış Kompleksləri
                </a>
              </li>
            </ul>
            <a href="#" className="btn btn-success text-capitalize">
              <i className="fa-solid fa-plus me-2"></i>Yeni elan
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
