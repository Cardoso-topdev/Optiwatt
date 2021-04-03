import React from "react";

import AppBar from "./AppBar";
import Introduction from "./Introduction";
import Variants from "./Variants";
import Dashboards from "./Dashboards";
import Features from "./Features";
import FAQ from "./FAQ";
import JoinUs from "./JoinUs";

function Presentation() {
  return (
    <React.Fragment>
      <AppBar />
      <Introduction />
      <Variants />
      <Dashboards />
      <Features />
      <FAQ />
      <JoinUs />
    </React.Fragment>
  );
}

export default Presentation;
