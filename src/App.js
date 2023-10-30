import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { getEmotionImgById } from "./util";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
        <Link to={"/edit"}>Edit</Link>
      </div>
      {/* <img alt="감정1" src={getEmotionImgById(1)} />
      <img alt="감정2" src={getEmotionImgById(2)} />
      <img alt="감정3" src={getEmotionImgById(3)} />
      <img alt="감정4" src={getEmotionImgById(4)} />
      <img alt="감정5" src={getEmotionImgById(5)} /> */}
    </div>
  );
}

export default App;
