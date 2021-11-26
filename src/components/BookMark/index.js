import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import riyadhArt from "../../images/riyadh-art.png";

import "./style.css";

const BASE_URL = "http://localhost:5000";

function BookMark() {
  const [cultures, setCultures] = useState([]);
  let navigate = useNavigate(); //// ...استخدمها اذا ابيه ينتقل من مكان الى آخر

  /////////////////// وظيفة اليوزإفكت تعطيه أمر بأنهاول مايدخل الصفحة يعرض لي هذي البيانات
  useEffect(() => {
    getAllCultures(); /// تروح تستدعي الداله اللي جابت البيانات في الباك إند
  }, []);

  /////////////////// تروح تجيب البيانات من الباك اند
  const getAllCultures = async () => {

    let email = JSON.parse(localStorage.getItem("userId"));
    console.log(email.email);

    const cultures = await axios.get(
      `${BASE_URL}/user/getFav?email=${email.email}` //// اغير بس الكلمة هذي
    );
     //localhost:5000/user/getFav?email=meead@gmail.com
    console.log(cultures.data); ///////// <=== عشان نشوف الداتا في الكونسول ونتاكد انها وصلت لنا !!
    setCultures(cultures.data); //////// <===وتخزنهم في هذا المتغير  وتتغير الكلتشر بدال ماهي ارراي فاضية تصير تحتوي على هذه البيانات
  };

  /////////////////////////////////////////////////////////////////////////////////////////

  const goInside = (id) => {
    /////// بعدين اقول له روح ادخل على هذا العنصر و اعطيته الباث تبعه
    console.log(id);
    navigate(`/culture/${id}`);
  };

  return (
    /////// هنا يعرض لي ع البراوزر
    <div className="allCluture">
      {/* <img className="backImg1" src={riyadhArt} alt="backImg" /> */}
      {/* <h1 className="text1">مشاريع ثقافية</h1> */}

      {cultures && cultures.map((elem) => {
        ///// يروح يمشي ع كل عنصر في الكولتشر وانو اذا ضغطت على هذا العنصر يستدعي فنكشن قو انسايد
        return (
          <>
            <div
              onClick={() => {
                goInside(elem._id);
              }}
              className="oneCluture"
            >
              <img src={elem.img} alt="culture" />
              <h5 className="cultureName"> {elem.title} </h5>
            </div>
          </>
        );
      })}
    </div>
  );
}
export default BookMark;
