import React from "react";
import SectionTitle from "../../components/SectionTitle";
import CardItem from "../../components/CardItem";

import properties from "../../data/property.json";

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
