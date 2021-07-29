import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="nav">
      <Link to='/' className="nav-link active" aria-current="page" href="#">
        Mi Equipo
      </Link>
      <Link to='/search-heroes' className="nav-link" href="#">
        Buscar Heroes
      </Link>
    </nav>
  );
};

export default Navbar;
