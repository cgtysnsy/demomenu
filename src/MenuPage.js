import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import NavBar from "./NavBar";
import axios from "axios";
import menu from "./data";
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState(menu);

  const [filteredMenuItems, setFilteredMenuItems] = useState(menu);

  const [categories, setCategories] = useState(allCategories);

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     setStatus("loading");
  //     try {
  //       const response = await axios.get(
  //         "https://taoserver.onrender.com/menus"
  //       );
  //       const allItems = response.data;
  //       setMenuItems(allItems);
  //       setFilteredMenuItems(allItems);
  //       setStatus("success");
  //       const allCategories = [
  //         "all",
  //         ...new Set(allItems.map((item) => item.category)),
  //       ];
  //       setCategories(allCategories);
  //     } catch (err) {
  //       setError(err);
  //       setStatus("error");
  //     }
  //   }
  //   fetchData();
  // }, []); //

  if (status === "loading") {
    return <h1>HOŞGELDİNİZ :)</h1>;
  }

  if (status === "error") {
    return <p>{error.message}</p>;
  }

  const filterItems = (category) => {
    const copyMenuItems = [...menuItems];

    if (category === "all") {
      setFilteredMenuItems(copyMenuItems);

      return;
    }

    const newItems = copyMenuItems.filter((item) => item.category === category);

    setFilteredMenuItems(newItems);
  };
  return (
    <>
      <NavBar />
      <div className="title">
        <h2>
          <img
            src="./images/coffee.jpg"
            alt="coffee"
            className="coffee-image"
          />
        </h2>
        <div className="underline"></div>
        <h5 style={{ letterSpacing: "6px" }}>Best Coffee for You</h5>
      </div>
      <Categories filterItems={filterItems} categories={categories} />
      <Menu items={filteredMenuItems} />
    </>
  );
}
