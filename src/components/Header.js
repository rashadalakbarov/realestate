import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import config from "../data/config.json";

const Header = ({ session, setSession }) => {
  const handleLogout = () => {
    // Oturumu sonlandırmak için işlemler yapılabilir
    setSession(null); // Oturumu sonlandırma işlemi
  };

  useEffect(() => {
    window.$(".dropdown-toggle").dropdown();
  }, [session]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            {config.company_name}
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
                <Link to={"/alqi-satqi"} className="nav-link" href="#">
                  Alqı-satqı
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/kiraye"} className="nav-link" href="#">
                  Kirayə
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/agentlikler"} className="nav-link" href="#">
                  Agentliklər
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/yasayis-kompleksleri"}
                  className="nav-link"
                  href="#"
                >
                  Yaşayış Kompleksləri
                </Link>
              </li>
            </ul>
            <Link to={"/bookmarks"}>
              <i className="fa-regular fa-heart fs-4 me-3"></i>
            </Link>
            <Link
              to={"/new"}
              href="#"
              className="btn btn-success text-capitalize"
            >
              <i className="fa-solid fa-plus me-2"></i>Yeni elan
            </Link>

            {session ? (
              <div className="dropdown ms-2">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-user me-1"></i>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link to={"/profile"} className="dropdown-item" href="#">
                    Şəxsi kabinet
                  </Link>
                  <button
                    to={"/logout"}
                    onClick={handleLogout}
                    className="dropdown-item"
                    href="#"
                  >
                    Çıxış
                  </button>
                </div>
              </div>
            ) : (
              <div className="dropdown ms-2">
                <Link to={"/login"} className="btn btn-secondary">
                  Giriş
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
