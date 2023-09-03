import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const [mode, setMode] = useState('Light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const [cart, setCart] = useState([]);
  const [account, setAccount] = useState(null);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route exact path="/home" element={<Home cart={cart} setCart={setCart} />} />
        {/* <Route path="/nft/:id" element={<NFTInfo cart={cart} setCart={setCart} />} /> */}
        {/* <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} /> */}
        {/* <Route path="/login" element={<Login setAccount={setAccount} />} />
        <Route path="/account" element={<Account account={account} />} /> */}
      </Routes>
    </Router>
  )
}

export default App;