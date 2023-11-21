import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Tv from "./pages/Tv";
import Celebrity from "./pages/Celebrity";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import LoginButton from "./components/Loginbutton";
import LoginPage from "./components/LoginPage";
function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/person" element={<Celebrity />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/movie/:title" element={<MovieDetail />} /> 
          <Route path="/login" element={<LoginPage />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

