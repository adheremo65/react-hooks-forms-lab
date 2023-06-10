import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm(props) {
  const [selected, setSelected] = useState("Produce");
  const [inputed, setInputed] = useState("");

  function selectHandler(e) {
    setSelected(e.target.value);
    console.log(e.target.value);
  }
  function inputHandler(event) {
    setInputed(event.target.value);
  }
  function onSubmitHandler(event) {
    event.preventDefault();
  }

  return (
    <form className="NewItem">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={inputed}
          onChange={inputHandler}
        />
      </label>

      <label>
        Category:
        <select name="category" onChange={selectHandler}>
          <option value={selected}>{selected}</option>
          <option value={selected}>{selected}</option>
          <option value={selected}>{selected}</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
