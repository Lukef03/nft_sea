import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Account from './pages/Account';
import NFTDetails from './pages/NFTDetails';
import astronaut from "./assets/images/astronaut.png";
import owl from "./assets/images/owl.png";
import dog from "./assets/images/dog.png";
import monkey from "./assets/images/monkey.png";
import dreamscape from "./assets/images/dreamscape.jpeg";
import cyber from "./assets/images/cyber.png";
import evolution from "./assets/images/evolution.png";
import galaxy from "./assets/images/galaxy.png";
import nanobot from "./assets/images/nanobot.png";
import nirvana from "./assets/images/nirvana.png";
import technoart from "./assets/images/technoart.png";
import virtual from "./assets/images/virtual.png";

function App() {
  const nfts = [
    { id: 1, title: 'Relaxed Astronaut', price: 24.45, desc: 'An astronaut in an intergalactic plain', image: astronaut, owner: 'LunaShadow87' },
    { id: 2, title: 'Scholar Owl', price: 36.43, desc: 'A very intellectual owl', image: owl, owner: 'ElectricJaguar' },
    { id: 3, title: 'Party Ape', price: 68.96, desc: 'A party-attending bored ape', image: monkey, owner: 'NebulaWhisper' },
    { id: 4, title: 'Baloon Dog', price: 12.75, desc: 'A pink coloured baloon dog', image: dog, owner: 'CrimsonSkyline' },
    { id: 5, title: 'Cybervortex Explorer', price: 29.43, desc: 'A mission into the cyber space', image: cyber, owner: 'QuantumScribe' },
    { id: 6, title: 'Nanobot Symphony', price: 12.75, desc: 'A host of nanobots working together', image: nanobot, owner: 'VelvetNinja' },
    { id: 7, title: 'Sphere Dreamscape', price: 23.74, desc: 'A dreamy landscape set in a sphere', image: dreamscape, owner: 'SilverFoxGlow' },
    { id: 8, title: 'Neural Nirvana', price: 27.34, desc: 'A multi-coloured abstract of nirvana', image: nirvana, owner: 'AuroraWave' },
    { id: 9, title: 'Cryptopixel Galaxy', price: 8.97, desc: 'A fusion of pixels in a digital galaxy', image: galaxy, owner: 'PixelPioneer' },
    { id: 10, title: 'VR Odyssey', price: 68.37, desc: 'A deep dive in virtual reality', image: virtual, owner: 'CelestialRhythm' },
    { id: 11, title: 'Technoart Fusion', price: 39.57, desc: 'A mix of technology with colours', image: technoart, owner: 'MidnightMarauder' },
    { id: 12, title: 'Evolution Elegance', price: 12.75, desc: 'An evolution which is dark in nature', image: evolution, owner: 'SolarFlareQuest' }
  ]

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
        <Route exact path="/" element={<Home nfts={nfts} cart={cart} setCart={setCart} />} />
        <Route exact path="/home" element={<Home nfts={nfts} cart={cart} setCart={setCart} />} />
        <Route path="/nft/:id" element={<NFTDetails nfts={nfts} cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/login" element={<Login setAccount={setAccount} />} />
        <Route path="/account" element={<Account account={account} />} />
      </Routes>
    </Router>
  )
}

export default App;