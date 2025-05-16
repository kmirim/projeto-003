import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import ResponsiveAppBar from './components/nav-bar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Router>
        <Routes>  
          <Route path="/" element={<Home />}></Route>
          <Route path="/Cadastro" element={<Cadastro />}></Route>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
