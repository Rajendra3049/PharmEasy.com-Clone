import logo from "./logo.svg";

import DrawerExample from "./Components/drawer";
import NavigationBar from "./Pages/NavigationBar";
import Footer from "./Pages/Footer";
import AllRoutes from "./Pages/AllRoutes";
import Payment from "./Pages/Payment";

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
