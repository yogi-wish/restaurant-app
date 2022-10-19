import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// this is used to add the button of all categories dynamically in the menu
const allCategories = [
  "all",
  ...new Set(
    items.map((item) => {
      return item.category;
    })
  ),
];
console.log(allCategories);

const MenuSection = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (catagory) => {
    if (catagory === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === catagory);
    setMenuItems(newItems);
  };
  return (
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  );
};

export default MenuSection;
