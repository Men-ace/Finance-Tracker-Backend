import { CustomCard } from "@components/customCard/CustomCard";
import { SectionTitle } from "@components/sectionTitle/SectionTitle";
import React from "react";

export const Recommendation = () => {
  return (
    <div className="mt-5">
      <SectionTitle title="Recommendation For You" />
      <div className="d-flex gap-2 justify-content-center flex-wrap">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  );
};
