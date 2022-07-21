import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { getManagers, deleteManager } from "../../utils/api.js";

const DeleteManager = () => {
  const [id, setId] = useState(0);
  const [status, setStatus] = useState("Input id to delete");
  const [response, setRes] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await getManagers()
      .then((res) => res.data)
      .catch((error) => console.log(error));
    // console.log(res)
    // for (const user of res) {
    //   setStatus("id not found, can't delete");
    //   setRes(1);
    //   console.log(response);
    //   if (user.id === +id) {
    //     // console.log(user.id)
    //     // setTimeout(() => setStatus("Input id to delete"), 5000);
    //     setRes(0);
    //     return setStatus("id found");
    //   }
    // }
    deleteManager(id);
    setStatus(`User with id ${id} has been deleted`)
  };

  return (
    <div>
      <h1>{status}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Id to delete:
          <input
            type="text"
            name="id"
            onChange={(e) => setId(e.currentTarget.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default DeleteManager;
