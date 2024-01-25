import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

function CourseItem({ id, title, price, img, quantity }) {
  return (
    <div>
      <img src="{img}" alt="" />
      <div>
        <h4>{title}</h4>
        <h4>{price}₺</h4>
        <div>
          <button>
            <BsChevronUp />
          </button>
          <p>{quantity}</p>
          <button>
            <BsChevronDown />
          </button>
        </div>
      </div>
      <button className="btn btn-warning">Sil</button>
    </div>
  );
}

export default CourseItem;
