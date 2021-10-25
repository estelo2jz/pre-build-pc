import React from "react";

import SupportTopHeader from "./SupportTopHeader";
import SupportGuides from "./SupportGuides";
import SupportQuestions from "./SupportQuestions";
import SupportSales from "./SupportSales";
import SupportSupport from "./SupportSupport";
import SupportContact from "./SupportContact";

const Support = () => {
  return (
    <div>
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
