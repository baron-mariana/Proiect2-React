import React from 'react';
import {Link} from 'react-router-dom';
//import logo-ul
import Logo from '../assets/images/logo.png';
// SVG-urile se importa diferit de imagini!
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import './Header.css';

function Header(props) {

    // Headerul primeste acum informatiile despre user si functia de signOut de la Firebase.
    // ATENTIE! Aceste prop-uri au fost pasate din App in Home in Layout in Header, ceea ce e ORIBIL.
    // Se numeste prop drilling tehnica asta si nu ne dorim asa ceva. Cum vom scapa de ea?
    // La cursul urmatopr, Redux ne salveaza!
    const {user, signOut} = props;

    // La click-ul pe butonul de delogare din header se va executa metoda signOut, venita din Firebase,
    // pasata prin props-uri tocmai din App.js.
    function handleSignOut() {
        signOut();
    }

    return(
    //vrem ca header-ul sa aiba un border sub el
    <header className="border-bottom mb-3">

        <div className="container-fluid container-min-max-width
        d-flex justify-content-between align-items-center">
            <Link to="/" className="my-3">
                {/* Utilizarea logo-ului */}
                <img src={Logo} alt="Baroni Shop" className="logo"/>
            </Link>
            <div>
                {/* ATENTIE! Daca avem informatii despre user, atunci ii vom afisa un mesaj.
                    Daca userul nu este logat, se va primi null ca valoare, deci nu com afisa nimic.*/}
                {
                    user
                    ?<p>Salut, {user.displayName}!</p>
                        :null
                }
                <div className="d-flex justify-content-end">
                    {/* Daca avem user, afisam textul "delogare", altfel altfel afisam "logare" */}
                    {user
                        //la click pe button se va apela metoda handleSingOut
                        ?<p className="logout h5 " onClick={handleSignOut}>Delogare</p>
                        :< Link to="/login" className="h5">Login</Link>
                    }
                {/* ShoppingCart este un SVG! */}
                <ShoppingCart className="ml-2"/>
                </div>
            </div>
        </div>
      </header>
    );
}

export default Header;
