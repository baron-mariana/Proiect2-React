import React from 'react';
import {Link} from 'react-router-dom';
//import logo-ul
import Logo from '../assets/images/logo.png';
// SVG-urile se importa diferit de imagini!
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import './Header.css';

function Header(props) {
    return(
    //vrem ca header-ul sa aiba un border sub el
    <header className="border-bottom mb-3">

        <div className="container-fluid container-min-max-width
        d-flex justify-content-between align-items-center">
            <Link to="/" className="my-3">
                {/* Utilizarea logo-ului */}
                <img src={Logo} alt="Sirluggia Shop" className="logo"/>
            </Link>
            <div>
                <Link to="/login" className="h5">Login</Link>
                {/* ShoppingCart este un SVG! */}
                <ShoppingCart className="ml-2"/>
            </div>
        </div>
      </header>
    );
}

export default Header;
