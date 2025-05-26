import React from "react";

import SupportTopHeader from "./SupportTopHeader";
import SupportGuides from "./SupportGuides";
import SupportQuestions from "./SupportQuestions";
import SupportContact from "./SupportContact";
import "./styles/Support.scss"

const Support = () => {
  return (
    <div className="support__container">
      {/* top header bg */}
      <SupportTopHeader />
      {/* how to guides component */}
      <SupportGuides />
      {/* FAQ & AQ questions component */}
      <SupportQuestions />
      {/* contact our team component */}
      <SupportContact />
    </div>
  );
};

export default Support;
