import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseItem from "./CourseItem";
import { clearCart } from "../control/cartSlice";

function CourseList() {
  const dispatch = useDispatch();
  const { cartItems, quantity, total } = useSelector((store) => store.cart);

  return (
    <>
      {quantity < 1 ? (
        <section className="cart">
          <header>
            <h2>Sepetim</h2>
            <h4>Bomboş</h4>
          </header>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2>Sepetim</h2>
            <div>
              {cartItems.map((item) => {
                return <CourseItem key={item.id} {...item} />;
              })}
            </div>
            <footer>
              <hr />
              <div className="footer">
                <h4>
                  Toplam Tutar: <span>{total}₺</span>
                </h4>
              </div>
              <button
                className="cartClearButton"
                onClick={() => dispatch(clearCart())}
              >
                Temizle
              </button>
            </footer>
          </header>
        </section>
      )}
    </>
  );
}

export default CourseList;
