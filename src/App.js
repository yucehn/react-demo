import { BrowserRouter, Routes, Route } from "react-router-dom"; // Navigate

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Mall from "./pages/Mall";
import MenuItem from "./pages/Mall/components/MenuItem";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mall" element={<Mall />} />
          <Route path="/menu-item/:id" element={<MenuItem />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
