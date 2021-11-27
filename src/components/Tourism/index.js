import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import phootoo from "../../images/vrps.jpeg";
import "./style.css";


const BASE_URL = "http://localhost:5000" //"https://project2-tuwaiq.herokuapp.com";

function Tourism() {
  const [tourism, setTourism] = useState([]);
  let navigate = useNavigate();

  /////////////////// وظيفة اليوزإفكت تعطيه أمر بأنهاول مايدخل الصفحة يعرض لي هذي البيانات
  useEffect(() => {
    getAllTourism();
  }, []);

  /////////////////// تروح تجيب البيانات من الباك اند
  const getAllTourism = async () => {
    const tourism = await axios.get(
      `${BASE_URL}/culture/allculture?cat=tourism` //// اغير بس الكلمة هذي
    );
    console.log(tourism.data);
    setTourism(tourism.data); //////// <=== وتخزنهم في هذا المتغير
  };

  /////////////////////////////////////////////////////////////////////////////////////////

  const goInside = (id) => {
    console.log(id);
    navigate(`/culture/${id}`);
  };
////////////////////////////////////////////////////////////////

  return (
    <div className="allTourism">
      <img className="backImg2" src={phootoo} alt="backImg" />
      <h1 className="text2">مشاريع سياحية</h1>

      {tourism.map((elem) => {
        return (
          <>
            <div onClick={() => {goInside(elem._id);}}className="oneTourism">
              <img src={elem.img} alt="Tourism" className="picTourism" />
              <h5 className="tourismName"> {elem.title} </h5>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Tourism;
