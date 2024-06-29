import React from "react";
import { Link } from "react-router-dom";

import config from "../data/config.json";

const Footer = () => {
  const socialNetworks = config.social_networks;
  return (
    <footer className="mt-5">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center py-3 border-top flex-wrap">
          <Link to={"/about"} className="me-3 text-muted text-decoration-none">
            Layihə haqqında
          </Link>
          <Link
            to={"/terms-and-conditions"}
            className="me-3 text-muted text-decoration-none"
          >
            İstifadəçi razılaşması
          </Link>
          <Link
            to={"/privacy"}
            className="me-3 text-muted text-decoration-none"
          >
            Məxfilik siyasəti
          </Link>
          <Link
            to={"/advertise"}
            className="me-3 text-muted text-decoration-none"
          >
            Reklam yerləşdirin
          </Link>
          <Link to={"/contact"} className="text-muted text-decoration-none">
            Bizimlə əlaqə
          </Link>
        </div>
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
          <div className="col-lg-10 d-flex align-items-center flex-wrap">
            <p className="text-center mb-0 text-lg-left">
              Saytın Administrasiyası reklam bannerlərinin və yerləşdirilmiş
              elanların məzmununa görə məsuliyyət daşımır.
            </p>
            <span className="mb-3 mb-md-0 text-body-secondary">
              &copy; 2023-{new Date().getFullYear()} RealEstate MMC - Bütün
              hüquqlar qorunur.
            </span>
          </div>

          <ul className="nav col-lg-2 justify-content-end list-unstyled d-flex">
            {socialNetworks &&
              socialNetworks.map((social, id) => {
                return (
                  <li className="ms-3 mt-3 mt-lg-0" key={id}>
                    <Link
                      to={social.url}
                      className="text-secondary fs-4"
                      target="_blank"
                    >
                      <i className={social.icon}></i>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
