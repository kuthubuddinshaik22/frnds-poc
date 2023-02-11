import './App.css';
import Register from './pages/Register'
import Events from './pages/Events'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact element={<Register />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/events" exact element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
