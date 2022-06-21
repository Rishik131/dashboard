import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="List" element={<List />} />
          <Route path="Login" element={<Login />} />
          <Route path="New" element={<New />} />
          <Route path="Single" element={<Single />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
