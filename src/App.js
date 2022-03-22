import "./App.css";
import Home from "./component/Home";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Croquis from "./component/Croquis";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/croquis" element={<Home />} />
        <Route path="/sketch" element={<Croquis />} />
        <Route path="/bb" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
