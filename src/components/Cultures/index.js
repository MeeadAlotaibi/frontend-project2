import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Culture from "../Culture";

const BASE_URL = "http://localhost:5000";

function Cultures() {
  const [cultures, setCultures] = useState([]);
  let navigate = useNavigate();

  /////////////////// وظيفة اليوزإفكت تعطيه أمر بأنهاول مايدخل الصفحة يعرض لي هذي البيانات
  useEffect(() => {
    getAllCultures();
  }, []);

  /////////////////// تروح تجيب البيانات من الباك اند
  const getAllCultures = async () => {
    const cultures = await axios.get(
      `${BASE_URL}/culture/allculture?cat=culture` //// اغير بس الكلمة هذي
    );
    console.log(cultures.data);
    setCultures(cultures.data); //////// <=== وتخزنهم في هذا المتغير
  };

  /////////////////////////////////////////////////////////////////////////////////////////

  const goInside = (id) => {
    /////// بعدين اقول له روح ادخل على هذا العنصر و اعطيته الباث تبعه
    console.log(id);
    navigate(`/culture/${id}`);
  };

  return (
    /////// هنا يعرض لي ع البراوزر
    <div className="allMovies">
      {cultures.map((elem) => {
        ///// يروح يمشي ع كل عنصر في الكولتشر وانو اذا ضغطت على هذا العنصر يستدعي فنكشن قو انسايد
        return (
          <>
            <div
              onClick={() => {
                goInside(elem._id);
              }}
              className="oneMovie"
            >
              <img src={elem.img} alt="culture" />
              <h5> {elem.title} </h5>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Cultures;

// <div
//   onClick={() => {
//     goInside(culture.id);
//   }}
//   className="oneculture"
// >
//   {culture.map}
//   <img src={culture.img} alt="culture" />
//   <h5> {culture.name} </h5>
// </div>
