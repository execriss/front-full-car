import { Typography, IconButton, Badge } from "@mui/material";
import React, { useEffect, useState } from "react";
import headerStyles from "./header.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import carLogo from "../../../img/sport-car.png";
import { logout } from "../../../services/auth";
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
  return (
    <nav class="navbar navbar-expand-lg navbar-dark navbar-fixed-top bg-dark">
      <a class="navbar-brand ms-2" href="/store">
        Full Car
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
            <a class="nav-link" href="/store">
              Inicio
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/categorias"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categorias
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contacto">
              Contacto
            </a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Disabled
            </a>
          </li> */}
        </ul>
      </div>
      <form class="form-inline d-flex ">
        <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
      </form>
      <IconButton aria-label="delete" style={{color: '#ccc'}} size="large">
        <LocalMallIcon />
      </IconButton>
      <IconButton
        aria-label="delete"
        color="primary"
        href="/store/cart"
        size="large"
      >
        <Badge badgeContent={number} color="primary">
          <ShoppingCartIcon style={{color: '#ccc'}} />
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
