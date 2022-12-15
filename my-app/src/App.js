import logo from "./logo.svg";
import "./App.css";
import DrawerExample from "./Components/drawer";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import Content from "./Components/Content";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <hr />
      <Content />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
