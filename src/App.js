import Layout from "./components/layout/layout";
import { useContext, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { TemaContext } from "./components/context/temaContext";
import Home from "./pages/Home/home";
import Blog from "./pages/Blog/blog";
import Singl from "./pages/Singl/singl";
import SinglBlog from "./pages/SinglBlog/singlBlog";
import About from "./pages/About/about";
import Karzina from "./pages/Karzina/karzina";
import { WechatOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import "./App.css";

function App() {
  const { tema, setTema } = useContext(TemaContext);
  const [karzina, setKarzina] = useState([]);
  console.log(karzina);
  return (
    <div className="App">
      <Layout mode={tema} karzina={karzina}>
        <Routes>
          <Route path="/" element={<Home set={setKarzina} />} />
          <Route path="/home" element={<Home set={setKarzina} />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog set={setKarzina} />} />
          <Route path="/category/:id" element={<Singl />} />
          <Route path="/blog/:id" element={<SinglBlog />} />
          <Route
            path="/karzina"
            element={<Karzina blog={karzina} home={karzina} set={setKarzina} />}
          />
        </Routes>
        <NavLink to={"/about"}>
          <FloatButton
            className="massage"
            icon={<WechatOutlined />}
            type="primary"
            style={{
              width: "70px",
              height: "70px",
              right: 24,
            }}
          />
        </NavLink>
      </Layout>
    </div>
  );
}

export default App;
