import Search from './pages/Search';
import {Link, Route, Routes} from "react-router-dom";
import Anime from "./pages/anime/Anime";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className='p-3 nav d-flex justify-content-center align-items-center'>
        <Link to = "/" className='text-decoration-none'>
          Anime Search App
        </Link>
      </nav>
      <Routes>
        <Route path="/" element = {<Search />} />
        <Route path="/:id" element = {<Anime />} />
      </Routes>
    </div>
  );
}

export default App;
