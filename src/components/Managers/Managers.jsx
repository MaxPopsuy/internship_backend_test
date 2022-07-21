import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { getManagers } from "../../utils/api";

const Managers = () => {
  const [data, setData] = useState([]);
  const handleGetManagers = async () => {
    const res = await getManagers()
      .then((res) => res.data)
      .catch((error) => console.log(error));
    setData(res);
    console.log(res)
    console.log(data)
  };
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div>
      <h1 onClick={handleGetManagers}>Component</h1>
      {data.map(manager =>{
        return <p key={manager.id}>{manager.name} id: {manager.id}</p>
      })}
    </div>
  );
};

export default Managers;
