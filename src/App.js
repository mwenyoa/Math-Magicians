import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/routes/home';
import Quote from './components/routes/quote';
import Header from './components/header';

const App = () => (
  <>
    <Header />
    <div className="styled-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
    </div>
  </>
);
export default App;
