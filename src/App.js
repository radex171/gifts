import { Route, Routes } from "react-router-dom";

import Home from "./Views/Home/Home";
import "./App.css";
import Header from "./Layout/Header/Header";
import ListGifts from "./Views/ListGifts/ListGifts";
import AddGift from "./Views/AddGift/AddGift";
import Register from "./Views/Register/Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="listgifts" element={<ListGifts />} />
        <Route path="addgift" element={<AddGift />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
