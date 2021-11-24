import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import phootoo from "../../images/vrps.jpeg";

// import Culture from "../Culture";

const BASE_URL = "http://localhost:5000";

function Tourism() {
  const [cultures, setCultures] = useState([]);
  let navigate = useNavigate();

  /////////////////// وظيفة اليوزإفكت تعطيه أمر بأنهاول مايدخل الصفحة يعرض لي هذي البيانات
  useEffect(() => {
    getAllCultures();
  }, []);

  /////////////////// تروح تجيب البيانات من الباك اند
  const getAllCultures = async () => {
    const cultures = await axios.get(
      `${BASE_URL}/culture/allculture?cat=tourism` //// اغير بس الكلمة هذي
    );
    console.log(cultures.data);
    setCultures(cultures.data); //////// <=== وتخزنهم في هذا المتغير
  };

  /////////////////////////////////////////////////////////////////////////////////////////

  const goInside = (id) => {
    console.log(id);
    navigate(`/culture/${id}`);
  };

  return (
    <div className="allTourism">
      <img className="backImg" src={phootoo} alt="backImg" />
      {cultures.map((elem) => {
        return (
          <>
            <div
              onClick={() => {
                goInside(elem._id);
              }}
              className="oneTourism"
            >
              <img src={elem.img} alt="Tourism" />
              <h5> {elem.title} </h5>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Tourism;
