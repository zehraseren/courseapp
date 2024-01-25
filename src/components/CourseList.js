import React from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";

function CourseList() {
  const { cartItems, quantity, total } = useSelector((store) => store.cart);

  return (
    <>
      {quantity < 1 ? (
        <section>
          <header>
            <h2>Sepetim</h2>
            <h4>Bomboş</h4>
          </header>
        </section>
      ) : (
        <section>
          <header>
            <h2>Sepetim</h2>
            <div>
              {cartItems.map((item) => {
                return <CourseItem {...item} />;
              })}
            </div>
            <footer>
              <hr />
              <div>
                <h4>
                  Toplam Tutar <span>{total}₺</span>
                </h4>
              </div>
              <button>Temizle</button>
            </footer>
          </header>
        </section>
      )}
    </>
  );
}

export default CourseList;
