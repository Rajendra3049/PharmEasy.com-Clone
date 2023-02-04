import cartStyle from "../Styles/Cartstyle.module.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { Select } from "@chakra-ui/react";
import React from "react";

function CartBox({ title, price, img, id, GetData }) {
  async function PostData() {
    // console.log(id);
    try {
      let res = await fetch(
        `https://medic-care-database.glitch.me/cart/${id}`,
        {
          method: "Delete",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      res = await res.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    GetData();
  }

  return (
    <div>
      <div className={cartStyle.leftBottom}>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h1>
            <b>{title}</b>
          </h1>
          <p className={cartStyle.leftBottomPrice}>Rs.{price}</p>
          <p className={cartStyle.leftBottomLine}>
            Delivery by Today, before 10:00 pm
          </p>
        </div>
        <div>
          <div className={cartStyle.delete}>
            {/* delete button */}
            <button
              onClick={() => {
                PostData();
              }}>
              <RiDeleteBinLine size="25px" color="black" />
            </button>
          </div>
          <div className={cartStyle.leftSelect}>
            <Select>
              <option value="qty1">Qty 1</option>
              <option value="qty2">Qty 2</option>
              <option value="qty3">Qty 3</option>
              <option value="qty4">Qty 4</option>
              <option value="qty5">Qty 5</option>
              <option value="qty6">Qty 6</option>
              <option value="qty7">Qty 7</option>
              <option value="qty8">Qty 8</option>
              <option value="qty9">Qty 9</option>
              <option value="qty10">Qty 10</option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartBox;
