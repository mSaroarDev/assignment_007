import React, { useState } from "react";
import ListItems from "./ListItems";

const TodoApp = () => {
  const [display, setDisplay] = useState("");
  const [items, setItems] = useState([]);
  
  const showData = (e) => {
    setDisplay(e.target.value);
  };

  const addItems = () => {
    setItems((oldItems) => {
      return [...oldItems, { text: display, completed: false }];
    });
    setDisplay(""); 
  };

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  const completeItem = (id) => {
    setItems((oldItems) => {
      return oldItems.map((item, index) => {
        if (index === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setItems((oldItems) => {
        return [...oldItems, { text: display, completed: false }];
      });
      setDisplay("");
    }
  }

  

  return (
    <div>
      <div className="container">
        <div className="flex h-screen w-full justify-center p-6">
          <div className="box max-w-sm w-full h-fit bg-white rounded-md p-4 mb-5">
            <h1 className="font-bold text-center text-2xl font-poppins">
              To Do Application <br /> by <span className="text-[#61DBFB]">React</span>
            </h1>
            <div className="input text-center mt-8 flex gap-2">
              <input
                onChange={showData}
                value={display} 
                onKeyDown={handleKeyDown}
                className="flex-1 h-10 p-3 rounded-lg border border-[#61DBFB] focus:outline-none"
                type="text"
                placeholder="Input your task..."
              />
              <button onClick={addItems} className="btn">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <div className="tasks mt-8">
              <ul>
                {items.map((taskItem, index) => {
                  return (
                    <ListItems
                      key={index}
                      id={index}
                      onSelect={deleteItem}
                      onComplete={completeItem}
                      value={taskItem.text}
                      completed={taskItem.completed}
                    />
                  );
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
