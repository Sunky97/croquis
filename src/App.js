import "./App.css";
import Home from "./component/Home";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Croquis from "./component/Croquis";
import Support from "./component/Support";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/croquis" element={<Home />} />
        <Route path="/sketch" element={<Croquis />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
