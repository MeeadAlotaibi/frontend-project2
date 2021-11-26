import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router";
import Nav from "../Nav";

const BookMark = () => {
  const navigate = useNavigate();
  const [honorable, setHonorable] = useState([]);
  const [resSearch, setResSearch] = useState("");
  const [local, setLocal] = useState("");
  const [remAdd, setRemAdd] = useState([]);

  ////////////////////////////////////////////////////

  useEffect(() => {
    getHonorable();
  }, []);

  ////////////////////////////////////////////////////

  const getLocalStorage = () => {
    const item = JSON.parse(localStorage.getItem("user"));
    setLocal(item);
  };
  ////////////////////////////////////////////////////

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      getDataEmail();
    }
    getLocalStorage();
  }, []);

  ////////////////////////////////////////////////////

  // get all data
  const getHonorable = async () => {
    try {
      const items = await axios.get("http://localhost:5000/honorbale");
      setHonorable(items.data);
    } catch (error) {
      console.log("error on get honorable", error);
    }
  };
  ////////////////////////////////////////////////////

  // get character info
  const characterInfo = (name) => {
    navigate(`/character/name/${name}`);
  };

  ////////////////////////////////////////////////////

  const getDataEmail = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const item = await axios.get(
      `http://localhost:5000/favorite/${user.email}`
    );
    setRemAdd(item.data);
  };

  // ////////////////////////////////////////////////////

  const removeOrAdd = async (id) => {
    let test = [];

    remAdd.forEach((item) => {
      test.push(item._id);
    });
    if (test.includes(id)) {
      document.getElementById(`${id}`).innerHTML = "add";
      /////
      await axios.put(`http://localhost:5000/user/fav/${local.email}/${id}`);
    } else {
      document.getElementById(`${id}`).innerHTML = "remove";

      await axios.put(`http://localhost:5000/removeFav/${local.email}/${id}`);
    }
    test = [];
    getDataEmail();
  };

  ////////////////////////////////////////////////////
  return (
    <div>
      {/* <Nav/> */}
      <h1>Honorable</h1>
      <input
        type="text"
        name="search"
        onChange={(e) => {
          setResSearch(e.target.value);
        }}
      />
      {honorable
        .filter((item) => {
          if (resSearch === "") {
            return item;
          } else if (
            item.name.toLowerCase().includes(resSearch.toLowerCase())
          ) {
            return item;
          }
        })
        .map((items, index) => {
          return (
            <div key={index}>
              <ul>
                <li onClick={() => characterInfo(items.name)}>
                  <img
                    className="imageCharacter"
                    src={items.img}
                    alt="character face"
                  />
                  <h1>{items.name}</h1>
                  <p>{items.price}</p>
                </li>{" "}
                <button id={items._id} onClick={() => removeOrAdd(items._id)}>
                  Favorite
                </button>
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default BookMark;
