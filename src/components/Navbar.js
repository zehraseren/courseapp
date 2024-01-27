import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

function Navbar() {
  const { quantity } = useSelector((store) => store.cart);
  console.log(useSelector((store) => store.cart));

  return (
    <nav>
      <div className="navbar">
        <h3>Kurs Uygulaması</h3>
        <div className="navDiv">
          <div className="itemsDiv">
            <p>{quantity}</p>
          </div>
          <FaCartShopping className="itemsIcon" size={25}/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
