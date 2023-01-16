import React from "react";
const Categories = ({ value, onClickCategory }) => {
  const categories = ["Все", "Iphone", "Ipad", "Macbook"];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={value === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}

        {/* <li
            onClick={() => onClickCategory(0)}
            className={activeCategory === 0 ? "active" : ""}   
          >
            Все
          </li>
          <li
            onClick={() => onClickCategory(1)}
            className={activeCategory === 1 ? "active" : ""}
          >
            Iphone
          </li>
          <li
            onClick={() => onClickCategory(2)}
            className={activeCategory === 2 ? "active" : ""}
          >
            Ipad
          </li>
          <li
            onClick={() => onClickCategory(3)}
            className={activeCategory === 3 ? "active" : ""}
          >
            Watch
          </li>
          <li
            onClick={() => onClickCategory(4)}
            className={activeCategory === 4 ? "active" : ""}
          >
            MacBook
          </li> */}
      </ul>
    </div>
  );
};

export default Categories;
