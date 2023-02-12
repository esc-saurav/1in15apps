import React, { useEffect, useState } from "react";

const getLocalItems = () => {
  let listitem = localStorage.getItem("list");
  if (listitem) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const Grocery = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalItems);
  const [isEditing, setEditing] = useState(false);
  const [edit, setEdit] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = { id: new Date().getTime().toString(), title: name };
    setList([...list, newList]);
    setAlert({ show: false, msg: "Item added to the list...", type: "add" });
    e.target.reset();
  };

  const handleDelete = (id) => {
    const newlist = [...list];
    newlist.splice(id, 1);
    setList(newlist);
    setAlert({ show: true, msg: `Item has been deleted!!`, type: "del" });
  };

  const handleClearALL = (id) => {
    const newlist = [...list];
    newlist.splice(id);
    setList(newlist);
    setAlert({ show: true, msg: "All items deleted!!", type: "del" });
  };

  const handleUpdate = (id) => {
    const specificitem = list.find((item) => item.id === id);
    setEditing(true);
    setEdit(id);
    setName(specificitem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-sm w-2/5 mx-auto flex flex-col items-center space-y-3 p-3">
        <p
          className={`${
            alert.type === "del"
              ? "bg-red-50 text-red-500"
              : "bg-green-50 text-green-600"
          } w-full text-center`}
        >
          {alert.msg}
        </p>
        <h1 className="text-2xl font-bold">Grocery Bud</h1>
        <form onSubmit={handleSubmit} className="w-11/12 flex justify-center">
          <input
            onChange={(e) => setName(e.target.value)}
            className="bg-blue-50 w-full outline-none"
            type="text"
            placeholder=" e.g eggs"
            value={name}
          />
          {edit ? (
            <button
              onClick={() => handleUpdate()}
              className="bg-blue-200 rounded-sm px-3 py-1"
            >
              Update
            </button>
          ) : (
            <button className="bg-blue-200 rounded-sm px-3 py-1">Submit</button>
          )}
        </form>
        <div className="w-full p-5">
          {list.map((item) => {
            const { id, title } = item;
            return (
              <ol key={id} className="flex justify-between gap-3 py-1">
                <li>{title}</li>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleUpdate(id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </ol>
            );
          })}
        </div>
        <p
          onClick={handleClearALL}
          className="text-red-500 py-2 cursor-pointer"
        >
          Clear items
        </p>
      </div>
    </section>
  );
};

export default Grocery;
