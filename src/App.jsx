import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route pash="/" element={<h1>Home page</h1>} />
        <Route pash="/about" element={<h1>About page</h1>} />
        <Route pash="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
