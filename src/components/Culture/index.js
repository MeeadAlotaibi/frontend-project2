import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

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

  useEffect(() => {/////// بعدين اقول له روح ادخل على هذا العنصر و اعطيته الباث تبعه
    getCulture();
    // getAllUsers();
  }, []);

  return (
    <>
      {console.log("ddjkdkd")}
      {culture ? (
        <div className="oneitemHomeM">
          <p className="cultureP"> {culture.title}</p>
          <img src={culture.img} alt="" />
          <h6 className="hhh">{culture.description}</h6>
          {/* <h5 className="h5space">g</h5> */}
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
};

export default Culture;
