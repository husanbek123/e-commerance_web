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
            element={<Karzina blog={karzina} set={setKarzina} />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
