import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";

const BASE_URL = "http://localhost:5000";

//////////////////////////////////////////////////////////////////

const Culture = (props) => {
  const [culture, setCulture] = useState("");
  const [local, setLocal] = useState("");
  const [remAdd, setRemAdd] = useState([]);
  const id = useParams().id;

  //////////////////////////////////////////////////////////////////

  const getCulture = async () => {
    // تروح تجيب البيانات من الباك اند
    const bigobj = await axios.get(`${BASE_URL}/culture/allallculture`);
    console.log(bigobj);
    setCulture(bigobj.data.find((elem) => elem._id == id)); //////// <=== وتخزنهم في هذا المتغير وسويت عليها فايند بحيث تطلعع لي المتغير
  };

  //////////////////////////////////////////////////////////////////

  useEffect(() => {
    // بعدين اقول له روح ادخل على هذا العنصر -- و اعطيته الباث تبعه
    getCulture();
  }, []);

  //////////////////////////////////////////////////////////////////

  const getDataEmail = async () => {
    const item = await axios.get(`http://localhost:5000/user/alluser`);
    setLocal(item);
    setRemAdd(item.data);
  };
  //////////////////////////////////////////////////////////////////

  const removeOrAdd = async (id) => {
    let test = [];
    let userEmail = JSON.parse(localStorage.getItem("userId"));
    console.log(userEmail);

    remAdd.forEach((item) => {
      test.push(item._id);
    });
    console.log(id);
    console.log(test);
    if (test.includes(id)) {
      document.getElementById(`${id}`).innerHTML = "add";
      console.log("remove");
      await axios.put(
        `http://localhost:5000/user/removeFav/${userEmail.email}/${id}`
      );
      console.log("removed");
    } else {
      document.getElementById(`${id}`).innerHTML = "remove";

      await axios.put(
        `http://localhost:5000/user/fav/${userEmail.email}/${id}`
      );
      console.log("add");
    }
    test = [];
    getDataEmail();
  };

  //////////////////////////////////////////////////////////////////

  return (
    <>
      {culture ? (
        <div className="oneitemHomeM">
          <div>
            <p className="cultureP"> {culture.title}</p>
            <img className="Oneculture" src={culture.img} alt="" />
          </div>
          <div className="descripation">
            <h6 className="hhh">{culture.description}</h6>
          </div>
          <button
            className="info__button"
            id={culture._id}
            onClick={() => removeOrAdd(culture._id)}
          >
            add To cart
          </button>
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
};

export default Culture;
