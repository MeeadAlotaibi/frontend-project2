import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import riyadhArt from "../../images/riyadh-art.png";

import "./style.css";

const BASE_URL = "http://localhost:5000";

function BookMark() {
  const [bookMark, setBookMark] = useState([]);
  let navigate = useNavigate(); //// ...استخدمها اذا ابيه ينتقل من مكان الى آخر

  /////////////////// وظيفة اليوزإفكت تعطيه أمر بأنهاول مايدخل الصفحة يعرض لي هذي البيانات
  useEffect(() => {
    getAllBookMark(); /// تروح تستدعي الداله اللي جابت البيانات في الباك إند
  }, []);

  /////////////////// تروح تجيب البيانات من الباك اند

  const getAllBookMark = async () => {
    let email = JSON.parse(localStorage.getItem("userId"));
    console.log(email.email);

    const bookMark = await axios.get(
      `${BASE_URL}/user/getFav?email=${email.email}` //// اغير بس الكلمة هذي
    );
    //localhost:5000/user/getFav?email=meead@gmail.com
    console.log(bookMark.data); ///////// <=== عشان نشوف الداتا في الكونسول ونتاكد انها وصلت لنا !!
    setBookMark(bookMark.data); //////// <===وتخزنهم في هذا المتغير  وتتغير الكلتشر بدال ماهي ارراي فاضية تصير تحتوي على هذه البيانات
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
      {bookMark &&
        bookMark.map((elem) => {
          ///// يروح يمشي ع كل عنصر في بوك مارك وانو اذا ضغطت على هذا العنصر يستدعي فنكشن قو انسايد
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
