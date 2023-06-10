import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [input, setInput] = useState("");
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function onSearchChange(event) {
    console.log(event.target.value);
    setInput(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (item.name.includes(input)) return true;
    if (input !== "") return item.name === input;

    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter
        onSearchChange={onSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
