import './App.css';
import Products from './Pages/Products';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      Ecommerce
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
