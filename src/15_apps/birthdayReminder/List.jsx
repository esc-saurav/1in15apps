import React from "react";

const List = ({ people }) => {
  return (
    <div>
      {people.map((items) => {
        return (
          <div key={items.id} className="flex items-center gap-2 py-2">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src={items.image}
              alt=""
            />
            <div className="flex flex-col items-start gap-2">
              <p className="font-bold">{items.name}</p>
              <p className="text-sm text-slate-500">{items.age} years</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
