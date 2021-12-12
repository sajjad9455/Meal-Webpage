import React from "react"; 
import "./filters.css";
import FilterItem from "./filterItem";
// 7.2K (gripped 2.9K)

const Filters = ({ filterList }) => {
  return (
    <div className="filters">
      {filterList &&
        filterList.map((filter) => {
          return <FilterItem filter={filter} key={filter.id} />;
        })} 
    </div>
  )
}


export default Filters;