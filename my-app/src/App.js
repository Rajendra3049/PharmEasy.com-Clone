import logo from "./logo.svg";
import "./App.css";
import DrawerExample from "./Components/drawer";
import NavigationBar from "./Pages/NavigationBar";
import Footer from "./Pages/Footer";
import Content from "./Pages/Content";
import HealthCare from "./Pages/HealthCare";
import AllRoutes from "./Pages/AllRoutes";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <hr />
      <AllRoutes />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
