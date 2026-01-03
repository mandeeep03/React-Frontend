import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import NavBar from "./Components/NavBar";


function App() {
  

  return (
    
    <div>
      <NavBar/>
    <main>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
    </Routes>
    </main>
    </div>
  );
}

export default App
