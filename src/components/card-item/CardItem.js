/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./card-item.css";
import { Link } from "react-router-dom";

const CardItem = (data) => {
  // console.log(data);

  return (
    <div className="card card-item">
      <Link to={`/detail/${data.id}`} className="item-link"></Link>
      <div className="card-img">
        <img
          className="card-img-top h-100"
          src={`${process.env.PUBLIC_URL}/images/elanlar/${data.image}`}
          alt="Card image cap"
        />
        <div href="#" className="favorite">
          <img
            src={`${process.env.PUBLIC_URL}/images/icons/empty_favorites.svg`}
            alt="favorites"
          />
        </div>
        <div className="card-position">
          <span className="agent me-1">Agentlik</span>
          <span className="complex">Kompleks</span>
        </div>
        {data.status != null && (
          <div className="card-status">
            {data.status === 1 && (
              <img
                src={`${process.env.PUBLIC_URL}/images/icons/featured.svg`}
                alt=""
                title="premium"
              />
            )}

            {data.status === 2 && (
              <img
                src={`${process.env.PUBLIC_URL}/images/icons/vipped.svg`}
                alt=""
                title="vip"
              />
            )}
          </div>
        )}
      </div>
      <div className="card-body pb-0">
        <h5>450 AZN/ay</h5>
        <p className="card-text mb-0">Həzi Aslanov m.</p>
        <ul className="sticker-list">
          <li>3 otaqlı</li>
          <li>
            122 m<sup>2</sup>
          </li>
          <li>3/9 mərtəbə</li>
        </ul>
      </div>
      <div className="card-footer">
        <small className="text-muted">Bakı, bu gün 13:30</small>
      </div>
    </div>
  );
};

export default CardItem;
