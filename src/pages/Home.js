import React from "react";
import SectionTitle from "../components/section-title/SectionTitle";
import CardItem from "../components/card-item/CardItem";

import properties from "../../src/data/property.json";

const Home = () => {
  return (
    <>
      <section>
        <div className="container">
          <SectionTitle title="VIP" />

          <div className="advert-container">
            {properties.map((item) => {
              return <CardItem key={item.id} {...item} />;
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionTitle title="SON" url={"/alqi-satqi"} />

          <div className="advert-container">
            {properties.map((item) => {
              return <CardItem key={item.id} {...item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
