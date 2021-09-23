import React, { useEffect, useState } from "react";
// import List from "../../list";
import "./todo.css";
import { AiFillDelete } from "react-icons/ai";
import { MdClear, MdCheckBox } from "react-icons/md";

export default function Todo() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  console.log(items);
  const deleteItem = (selectedItem, index) => {
    console.log(selectedItem);
    setItems(items.filter((item) => item != selectedItem));
    // let updatedList = items;
    // const toDelete = updatedList.indexOf(selectedItem);
    // updatedList.splice(toDelete, 1);
    // setItems(updatedList);
  };

  const clearList = () => {
    setItems([]);
  };

  // const handleClick = (id) => {
  //   console.log(id);
  //   if (items.includes(id)) {
  //     setSelected(true);
  //   }
  // };
  console.log(selected);
  return (
    <div className="App">
      <div className="main_div">
        <div className="center_div">
          <h1>To do List</h1>
          <input
            type="text"
            placeholder="Add Items"
            value={inputList}
            onChange={(e) => itemEvent(e)}
          />
          <button onClick={listOfItems}>+</button>

          <ol>
            {/* <li>{inputList}</li> */}

            {items.map((itemvalue, index) => {
              return (
                <div key={index} className={"list"}>
                  <div className="list_style">
                    {/* {cutThrough ? ( */}
                    {/* <li style={{ textDecoration: "line-through" }}>
                        {itemvalue}{" "}
                      </li> */}
                    {/* ) : ( */}

                    <li
                      onClick={() => setSelected([...selected, itemvalue])}
                      style={{
                        textDecoration: selected.includes(itemvalue)
                          ? "line-through"
                          : "",
                      }}
                    >
                      {" "}
                      {itemvalue}{" "}
                    </li>
                    {/* )} */}
                  </div>
                  {/* <MdCheckBox onClick={() => setCutThrough(!cutThrough)} /> */}
                  <AiFillDelete onClick={() => deleteItem(itemvalue, index)} />
                </div>
              );
            })}
          </ol>
          {items.length > 0 ? (
            <MdClear onClick={clearList} />
          ) : (
            <>list is empty!!!</>
          )}
        </div>
      </div>
    </div>
  );
}
