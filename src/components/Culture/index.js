import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";

const BASE_URL = "http://localhost:5000";
const Culture = (props) => {
  const [culture, setCulture] = useState("");
  const id = useParams().id;

  const getCulture = async () => {
    /////////////////// تروح تجيب البيانات من الباك اند

    const bigobj = await axios.get(`${BASE_URL}/culture/allallculture`);
    console.log(bigobj);

    setCulture(bigobj.data.find((elem) => elem._id == id)); //////// <=== وتخزنهم في هذا المتغير وسويت عليها فايند بحيث تطلعع لي المتغير
  };

  useEffect(() => {
    /////// بعدين اقول له روح ادخل على هذا العنصر -- و اعطيته الباث تبعه
    getCulture();
    // getAllUsers();
  }, []);

  return (
    <>
      {console.log("ddjkdkd")}
      {culture ? (
        <div className="oneitemHomeM">
          <div>
            <p className="cultureP"> {culture.title}</p>
            <img className="Oneculture" src={culture.img} alt="" />
          </div>
          <div className="descripation">
            <h6 className="hhh">{culture.description}</h6>
          </div>
          {/* <h5 className="h5space">g</h5> */}
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
};

export default Culture;
