const ListItems = (props) => {
  return (
    <li className="">
      <div className="task">
        <span className="mr-3 cursor-pointer">
          <i className="fa-regular fa-circle"></i>
        </span>
        <span>{props.value}</span>
      </div>
      <span onClick={ () => props.onSelect(props.id)} className="cross">
        <i className="fa-solid fa-xmark"></i>
      </span>
    </li>
  );
};

export default ListItems;
