import React from "react";
import { Route, Routes } from "react-router-dom";

import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

import Cart from "./Pages/Cart";

// import product from "./assets/Product.json";

export const SearchContext = React.createContext("");

const App = () => {
  const [searchVal, setSearchVal] = React.useState("");
  return (
    <>
      <div className="wrapper">
        <SearchContext.Provider value={{ searchVal, setSearchVal }}>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />

              <Route path="*" element={<NotFound />} />
            </Routes>

            <hr></hr>
            <h4>
              г.Красноярск,<br></br>ул.Взлетная д.34<br></br> 89958937651
            </h4>
          </div>
        </SearchContext.Provider>
      </div>
    </>
  );
};

export default App;
