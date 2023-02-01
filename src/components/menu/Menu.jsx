import React, { useState } from "react";
import menu from "./Data";

const Menu = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState([]);

  const filterItems = (categories) => {
    const newItems = menu.filter((menu) => menu.category === categories);
    return setMenuItems(newItems);
  };

  return (
    <>
      <div className="bg-white flex flex-col gap-6 w-full md:w-11/12 mx-auto p-2 md:p-8">
        <div className="flex  flex-col text-center">
          <h1 className="text-4xl font-bold">Our Menu</h1>
          <div className="flex gap-5 items-center justify-center py-4">
            <button
              onClick={() => filterItems("all")}
              className="text-yellow-600 border border-yellow-600 px-2 py-1"
            >
              All{" "}
            </button>
            <button
              onClick={() => filterItems("breakfast")}
              className="text-yellow-600 border border-yellow-600 px-2 py-1"
            >
              Breakfast
            </button>
            <button
              onClick={() => filterItems("lunch")}
              className="text-yellow-600 border border-yellow-600 px-2 py-1"
            >
              Lunch
            </button>
            <button
              onClick={() => filterItems("shakes")}
              className="text-yellow-600 border border-yellow-600 px-2 py-1"
            >
              Shakes{" "}
            </button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {menuItems.map((item, i) => {
            return (
              <div key={i} className="md:flex gap-4  p-4">
                <img
                  className="w-44 h-44 object-cover border-2 border-yellow-600"
                  src={item.img}
                  alt=""
                />
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-bold tracking-wide">{item.title}</p>
                    <p className="font-bold text-yellow-600 tracking-wide">
                      ${item.price}
                    </p>
                  </div>
                  <hr></hr>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
