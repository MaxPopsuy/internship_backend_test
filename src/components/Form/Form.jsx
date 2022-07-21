import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { postManager } from "../../utils/api.js";

const Form = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const managerData = new FormData();
    managerData.append("name", name);
    managerData.append("description", desc);
    managerData.append("login", login);
    managerData.append("password", password);
    postManager(managerData);
  };
  const erenSubmit = async (event) => {
    event.preventDefault();
    const managerData = new FormData();
    managerData.append("name", "Eren Jaeger");
    managerData.append("description", "Eren Jaeger from paradise privit privit🥰🥰🥰");
    managerData.append("login", "erenjaeger885");
    managerData.append("password", "8702856EJ");
    postManager(managerData);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h1>{desc}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            onChange={(e) => setDesc(e.currentTarget.value)}
          />
        </label>
        <label>
          Login:
          <input
            type="text"
            name="login"
            onChange={(e) => setLogin(e.currentTarget.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="login"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={(event) => erenSubmit(event)}>Eren Jaeger</button>
    </div>
  );
};

export default Form;
