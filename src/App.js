import "./App.css";
import Home from "./component/Home";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/croquis" element={<Home />} />
        <Route path="/aa" element={<Home />} />
        <Route path="/bb" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
