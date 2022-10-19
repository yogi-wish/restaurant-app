import React from "react";

const Categories = (props) => {
  const { categories, filterItems } = props;
  return (
    // that is approach to in-sync with data and dynamic approach to inlist the filter button with change of category in the data
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
