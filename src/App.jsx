import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";


function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <p>Movie information is provided by <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">TMDB</a>. This app is not endorsed or certified by TMDB.</p>
        <p>Video playback is provided by a third-party service.</p>
      </footer>
    </MovieProvider>
  );
}

export default App;
