import React from "react";
import agencies from "../../src/data/agency.json";

import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import PageTitle from "../components/page-title/PageTitle";
import AgencyItem from "../components/agency/AgencyItem";

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
