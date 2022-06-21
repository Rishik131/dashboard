import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Login" element={<Login />} /> */}
        <Route path="/List" element={<List />} />
        {/* <Route path="/New" element={<New />} />
        <Route path="/Single" element={<Single />} /> */}
      </Routes>
    </>
  );
}

export default App;
