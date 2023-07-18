import React from "react";

const ListItems = (props) => {
  return (
    <li>
      <div className="task">
        <span onClick={() => props.onComplete(props.id)} className="mr-3 cursor-pointer">
          {props.completed ? (
            <i className="fa-regular fa-circle-check"></i>
          ) : (
            <i className="fa-regular fa-circle"></i> 
          )}
        </span>
        <span>{props.value}</span>
      </div>
      <span onClick={() => props.onSelect(props.id)} className="cross">
        <i className="fa-solid fa-xmark"></i>
      </span>
    </li>
  );
};

export default ListItems;
