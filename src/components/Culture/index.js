import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./style.css";
import { BsBookmarkCheckFill, BsBookmarkDash } from "react-icons/bs";

const BASE_URL = "http://localhost:5000"; //"" //https://project2-tuwaiq.herokuapp.com


//////////////////////////////////////////////////////////////////
const Culture = (props) => {
  const [culture, setCulture] = useState("");
  const [local, setLocal] = useState("");
  const [remAdd, setRemAdd] = useState([]);
  const [flag, setFlag] = useState(true);
  const [favs, setFavs] = useState([]);
  const id = useParams().id;

  //////////////////////////////////////////////////////////////////
const getCulture = async () => {
   // تروح تجيب البيانات من الباك اند
  const bigobj = await axios.get(`${BASE_URL}/culture/allallculture`); //"http://localhost:5000"
  console.log(bigobj);
  setCulture(bigobj.data.find((elem) => elem._id == id)); //////// <=== وتخزنهم في هذا المتغير وسويت عليها فايند بحيث تطلع لي المتغير
};

  //////////////////////////////////////////////////////////////////

  useEffect(() => {
    // بعدين اقول له روح ادخل على هذا العنصر -- و اعطيته الباث تبعه
    getCulture();
    getDataEmail();
    getCurrentUser();
  }, []);

  //////////////////////////////////////////////////////////////////
  const getDataEmail = async () => {
    const item = await axios.get(`${BASE_URL}/user/alluser`); //"http://localhost:5000"
    console.log(item);
    setLocal(item);
    setRemAdd(item.data);
  };
  console.log(local, "local");

  /////////////////////////////////////////////////////////////////
  const getCurrentUser = () => {
    const currentUser = JSON.parse(localStorage.getItem("userId")) || "no user";
    if(currentUser !== "no user"){
    const userFavs = currentUser.favoriteSchema;
    console.log(userFavs, id);
    if (userFavs.includes(id)) {
      console.log("here");
      setFlag(false);
    }
  }
  };

  /////////////////////////////////////////////////////////////////
  const removeOrAdd = async (id) => {
    let userEmail = JSON.parse(localStorage.getItem("userId"));
    await axios.put(`${BASE_URL}/user/fav/${userEmail._id}/${id}`).then((result)=>{
     localStorage.setItem("userId", JSON.stringify(result.data));
    }); //"http://localhost:5000"
    setFlag(!flag);
    getDataEmail();
  };

  /////////////////////////////////////////////////////////////////
  return (
    <>
      {culture ? (
        <div className="oneitemHomeM">


          <div className="jjj">
            <p className="cultureP1"> {culture.title}</p>
            <img className="Oneculture" src={culture.img} alt="" />
          </div>


          <div className="descripation">
            <h6 className="hhh">{culture.description}</h6>
          </div>

          
          {localStorage.getItem("userId") ? (
            <div>
              <p
                className="info__button"
                id={culture._id}
                onClick={() => removeOrAdd(culture._id)}
              >
                {flag ? <BsBookmarkCheckFill /> : <BsBookmarkDash />}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
};

export default Culture;
