import React from "react";
import { Select } from "@chakra-ui/react";
import ITP from "../MiniComponents/ITP";
import foodStyles from "../Styles/HealthFood.module.css";

function HealthFood() {
  const [data, setData] = React.useState([]);
  const [sort, setSort] = React.useState("asc");

  async function GetData() {
    try {
      let res = await fetch(
        `http://localhost:3000/data?_sort=price&_order=${sort}`
      );
      res = await res.json();
      setData(res);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    GetData();
  }, [sort]);
  console.log(data);
  return (
    <div style={{ width: "65%", margin: "auto" }}>
      <div id="filter boxes" className={foodStyles.filter}>
        <div>
          <h1>Health Food and Drinks</h1>
        </div>
        <div>
          <p>Sort By:</p>
          <Select
            placeholder="Select option"
            value={sort}
            onChange={(e) => setSort(e.target.value)}>
            <option value="asc">Price Low to High</option>
            <option value="desc">Price High to Low</option>
          </Select>
        </div>
      </div>
      <div id="append all data" className={foodStyles.products}>
        {data.map((e) => (
          <ITP key={e.id} img={e.img} title={e.title} price={e.price} />
        ))}
      </div>
    </div>
  );
}
export default HealthFood;
