import React, { useState, useReducer } from "react";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";

let save;

function reducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const newItems = [...state.items, action.payload];
    return { ...state, items: newItems };
  }

  if (action.type === "CLEAR_ALL") {
    return { ...state, items: [] };
  }

  if (action.type === "DELETE") {
    return { ...state, items: action.payload };
  }

  if (action.type === "EDIT") {
    console.log(action.payload);
    return { ...state, items: action.payload, editItem: true };
  }

  throw new Error("no matching action type");
}

function App() {
  const defaultState = {
    items: [],
    editItem: false,
  };

  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  function handleSubmit(e) {
    e.preventDefault();
    let newItem;
    if (state.editItem === true) {
      state.editItem = false;
      newItem = { id: save, name };
    } else {
      newItem = { id: uuid(), name };
    }

    dispatch({ type: "ADD_ITEM", payload: newItem });
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleClearList() {
    dispatch({ type: "CLEAR_ALL" });
  }

  function handleDelete(id) {
    const newItems = state.items.filter((item) => item.id !== id);
    dispatch({ type: "DELETE", payload: newItems });
  }

  function handleEdit(id) {
    const selectedItem = state.items.find((item) => item.id === id);
    setName(selectedItem.name);
    save = id;
    const newItems = state.items.filter((item) => item.id !== id);
    dispatch({ type: "EDIT", payload: newItems });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput
            item={name}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={state.editItem}
          ></TodoInput>
          <TodoList
            items={state.items}
            handleClearList={handleClearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            listNotEmpty={state.items.length}
          ></TodoList>
        </div>
      </div>
    </div>
  );
}

export default App;
