import React, { useState } from "react";
import ListItems from "./ListItems";

const TodoApp = () => {
  const [display, setDisplay] = useState();
  const [items, setItems] = useState([]);

  const showData = (e) => {
    setDisplay(e.target.value);
  };

  const addItems = () => {
    setItems((oldItems) => {
      return [...oldItems, display];
    });
  };

  const deleteItem = (id) => {

    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      })
    })
}


  return (
    <div>
      <div className="container">
        <div className="flex h-screen w-full justify-center p-6">
          <div className="box max-w-sm w-full h-fit bg-white rounded-md p-4">
            <h1 className=" font-bold text-center text-2xl font-poppins">
              To Do Application <br /> by{" "}
              <span className="text-[#61DBFB]">React</span>
            </h1>
            <div className="input text-center mt-8 flex gap-2">
              <input
                onChange={showData}
                className=" flex-1 h-10 p-3 rounded-lg border border-[#61DBFB] focus:outline-none"
                type="text"
                placeholder="Input your task..."
              />
              <button onClick={addItems} className="btn">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <div className="tasks mt-8">
              <ul>
                {/* <ListITems/> */}

                {items.map((taskItem, index) => {
                  return <ListItems key={index} id={index} onSelect={deleteItem} value={taskItem} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
