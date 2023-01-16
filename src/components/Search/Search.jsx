import React from "react";
import { SearchContext } from "../../App";
import styles from "./Search.module.scss";
const Search = () => {
  const { searchVal, setSearchVal } = React.useContext(SearchContext);
  return (
    <>
      <input
        value={searchVal} //controlled input
        onChange={(event) => setSearchVal(event.target.value)}
        className={styles.main}
        placeholder="Поиск..."
      />
      {/* <button className={styles.bs}>Найти</button> */}
    </>
  );
};

export default Search;
