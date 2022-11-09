import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/login'
import Register from './components/auth/register'
import Client from './components/client/client'
import Home from './components/client/components/home'
import Detail from './components/client/components/detail'
import Cart from './components/client/components/cart'
import Contact from './components/client/components/contact';
import Motor from './components/client/components/Categories/Motor';
import Iluminacion from './components/client/components/Categories/Iluminacion';
import TrenDelantero from './components/client/components/Categories/TrenDelantero';
import Lubricantes from './components/client/components/Categories/Lubricantes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path='store' element={<Client />}>
        <Route path="" element={<Home />} />
        <Route path="detail/:id/:category" element={<Detail />} />
        <Route path="cart" element={<Cart />} />
        <Route path='contact' element={<Contact />} />
        <Route path='motor' element={<Motor />} />
        <Route path='iluminacion' element={<Iluminacion />} />
        <Route path='tren-delantero' element={<TrenDelantero />} />
        <Route path='lubricantes' element={<Lubricantes />} />
      </Route>
    </Routes>
  );
}

export default App;
