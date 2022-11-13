import { Typography, IconButton, Badge } from "@mui/material";
import React, { useEffect, useState } from "react";
import headerStyles from "./header.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import carLogo from "../../../img/sport-car.png";
import { logout } from "../../../services/auth";
import Logo from '../../../img/fullcarlogo.png'

function Header() {
  var navigate = useNavigate();
  let [number, setNumber] = useState(0);
  useEffect(() => {
    let shouldUpdate = true;
    const getUserCart = () => {
      const item = localStorage.getItem("number");
      if (item) {
        setNumber(parseInt(item));
      }
    };
    if (shouldUpdate) {
      getUserCart();
    }
    window.addEventListener("storage", getUserCart);
    return () => {
      shouldUpdate = false;
    };
  }, [number]);
  const closeSession = () => {
    logout({ navigate });
  };

  const search = (e) => {
    localStorage.setItem("search", e.target.value)
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top" style={{background: '#ccc'}}>
      <a class="mx-3" href="/store">
      <img src={Logo} alt='logo' height={50} />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link fw-bold" href="/store">
              Inicio
            </a>
          </li>
          <li class="nav-item dropdown">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle fw-bold" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><a class="dropdown-item" href="/store/motor">Motor</a></li>
                    <li><a class="dropdown-item" href="/store/iluminacion">Iluminación</a></li>
                    <li><a class="dropdown-item" href="/store/tren-delantero">Tren Delantero</a></li>
                    <li><a class="dropdown-item" href="/store/lubricantes">Lubricantes</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-bold" href="/store/contact">
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <form class="form-inline d-flex ">
        <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" onChange={(e) => search(e)}/>
      </form>
      <IconButton
        aria-label="delete"
        color="primary"
        href="/store/cart"
        size="large"
      >
        <Badge badgeContent={number} color="primary">
          <ShoppingCartIcon style={{color: 'black'}} />
        </Badge>
      </IconButton>
      <IconButton
        aria-label="delete"
        color="error"
        size="large"
        onClick={closeSession}
      >
        <LogoutIcon />
      </IconButton>
    </nav>
  );
}

export default Header;
