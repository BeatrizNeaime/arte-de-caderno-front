import React from "react";
import { CardDiv, SchoolCity, SchoolName } from "./style";

const SchoolCard = ({ school }) => {
  return (
    <CardDiv>
      <SchoolName>{school.name}</SchoolName>
      <SchoolCity>
        {school.city} - {school.uf}
      </SchoolCity>
    </CardDiv>
  );
};

export default SchoolCard;
