import { Route, Routes } from "react-router-dom";
import Content from "./Content";
import HealthCare from "./HealthCare";
import HealthFood from "./HealthFood";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/healthcare" element={<HealthCare />} />
      <Route path="/healthfood" element={<HealthFood />} />
    </Routes>
  );
}

export default AllRoutes;
