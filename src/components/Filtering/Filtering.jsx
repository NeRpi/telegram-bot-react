import React from "react";
import "./Filtering.css";
import MultipleSelect from "./MultiSelect";
import Location from "./Location";
import PriceRangeInput from "./Price";

const Filtering = () => {
  return (
    <div className={"filtering"}>
      <h3 style={{ margin: "10px" }}>Фильтрация</h3>
      <PriceRangeInput />
      <Location />
      <MultipleSelect />
    </div>
  );
};

export default Filtering;
