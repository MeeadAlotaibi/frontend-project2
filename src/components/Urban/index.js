import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:5000";

function Cultures() {
  const [cultures, setCultures] = useState([]);
  let navigate = useNavigate(); //// ...استخدمها اذا ابيه ينتقل من مكان الى آخر

  /////////////////// وظيفة اليوزإفكت تعطيه أمر بأنهاول مايدخل الصفحة يعرض لي هذي البيانات
  useEffect(() => {
    getAllCultures(); /// تروح تستدعي الداله اللي جابت البيانات في الباك إند
  }, []);

  /////////////////// تروح تجيب البيانات من الباك اند
  const getAllCultures = async () => {
    const cultures = await axios.get(
      `${BASE_URL}/culture/allculture?cat=urban` //// اغير بس الكلمة هذي
    );
    console.log(cultures.data); ///////// <=== عشان نشوف الداتا في الكونسول ونتاكد انها وصلت لنا !!
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
    <div className="allUrban">
      {cultures.map((elem) => {
        ///// يروح يمشي ع كل عنصر في الكولتشر وانو اذا ضغطت على هذا العنصر يستدعي فنكشن قو انسايد
        return (
          <>
            <div
              onClick={() => {
                goInside(elem._id); /// <========= هنا راح يدخل عن طريق الآيدي
              }}
              className="oneUrban"
            >
              <img src={elem.img} alt="Urban" /> {/*هنا يعرض الصورة  */}
              <h5> {elem.title} </h5>
              {/*هنا يعرض إسم الصورة  */}
            </div>
          </>
        );
      })}
    </div>
  );
}
export default Cultures;
