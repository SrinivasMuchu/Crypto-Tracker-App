import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/coin/:id" element={<Coin />} /> */}
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
