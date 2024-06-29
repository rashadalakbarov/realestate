import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  return (
    <section className="mt-5">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link
                to={"/"}
                className="text-decoration-none"
                style={{ color: "var(--main-color)" }}
              >
                Ana Səhifə
              </Link>
            </li>

            {props.default && (
              <li className="breadcrumb-item">
                <Link
                  to={props.default[0].path}
                  className="text-decoration-none"
                  style={{ color: "var(--main-color)" }}
                >
                  {props.default[0].label}
                </Link>
              </li>
            )}

            <li className="breadcrumb-item active" aria-current="page">
              {props.item}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumb;
