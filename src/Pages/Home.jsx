import React, { useState } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import IphoneBlock from "../components/ProductBlock/IphoneBlock";
import Sceleton from "../components/ProductBlock/Skeleton";
import { SearchContext } from "../App";

const Home = () => {
  const { searchVal } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId, setCategoryId } = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "price",
  });
  React.useEffect(() => {
    // setIsLoading(true);
    fetch(
      `https://63b16cd1f9a53fa202777e44.mockapi.io/Product-items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType.sortProperty}&order=desc`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [sortType, searchVal]);

  // const product =  items.map((obj) => <IphoneBlock key={obj.id} {...obj} />)}
  // const skeletons = [...new Array(9)].map((_, index) => <Skeleton key = {index}/>)

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(id) => setCategoryId(id)}
        />
        <Sort sortValue={sortType} onClickSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Вся продукция</h2>

      <div className="content__items">
        {isLoading
          ? [...new Array(9)].map((_, index) => <Sceleton key={index} />)
          : items
              .filter((obj) => {
                //поиск через .filter
                if (obj.title.toLowerCase().includes(searchVal.toLowerCase())) {
                  return true;
                } else return false;
              })
              .map((obj) => <IphoneBlock key={obj.id} {...obj} />)}
        {" "}
        {/* {items.map((obj, index) =>
        //         <IphoneBlock
        //           key={index}
        //           title={obj.title}
        //           price={obj.price}
        //           image={obj.imageUrl}
        //           sizes={obj.sizes}
        //           colortype={obj.colortype}
        //           specifications={obj.specifications}
        //         />
        //       ))} */}
      </div>
    </div>
  );
};

export default Home;
