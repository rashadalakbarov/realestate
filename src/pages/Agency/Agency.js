import React from "react";
import agencies from "../../data/agency.json";

import Breadcrumb from "../../components/Breadcrumb";
import PageTitle from "../../components/PageTitle";
import AgencyItem from "../../components/AgencyItem";

import "./agency.css";

const Agency = () => {
  return (
    <>
      <Breadcrumb item={"Agentliklər"} />

      <section>
        <div className="container">
          <PageTitle title="Daşınmaz əmlak agentlikləri" />
          <div className="row">
            {agencies.map((item) => {
              return <AgencyItem key={item.id} {...item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Agency;
