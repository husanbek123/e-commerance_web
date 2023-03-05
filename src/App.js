import Layout from "./components/layout/layout";
import { useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { TemaContext } from "./components/context/temaContext";
import Category from "./pages/Category/category";
import Home from "./pages/Home/home";
import Blog from "./pages/Blog/blog";
import Singl from "./pages/Singl/singl";
import SinglBlog from "./pages/SinglBlog/singlBlog";
import About from "./pages/About/about";
import Karzina from "./pages/Karzina/karzina";

function App() {
  const { tema, setTema } = useContext(TemaContext);
  const [karzina, setKarzina] = useState([]);
  return (
    <div className="App">
      <Layout mode={tema} karzina={karzina}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category set={setKarzina}/>} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/singl" element={<Singl />} /> */}
          <Route path="/blog/:id" element={<SinglBlog />} />
          <Route path="/karzina" element={<Karzina products={karzina} set={setKarzina}/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
