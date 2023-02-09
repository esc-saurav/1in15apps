import React, { useState } from "react";

const Grocery = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setEditing] = useState(false);
  const [edit, setEdit] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-sm w-2/5 mx-auto flex flex-col items-center space-y-3 p-3">
      <h1 className="text-2xl font-bold">Grocery Bud</h1>
      <div className="w-11/12 flex justify-center">
        <input className="bg-blue-50 w-full" type='text' placeholder=" e.g eggs"/>
        <button className="bg-blue-200 rounded-sm px-3 py-1">Submit</button>
      </div>
      </div>
    </section>
  );
};

export default Grocery;
