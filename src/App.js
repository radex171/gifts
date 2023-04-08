import { Route, Routes } from "react-router-dom";

import Home from "./Views/Home/Home";
import "./App.css";
import Header from "./Layout/Header/Header";
import ListGifts from "./Views/ListGifts/ListGifts";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="listgifts" element={<ListGifts />} />
      </Routes>
    </div>
  );
}

export default App;
