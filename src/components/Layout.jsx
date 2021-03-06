import React from "react";
// Componenta Layout se va ocupa de importul si includerea Header-ului si a Footer-ului

import Header from '../components/Header'
import Footer from '../components/Footer'
import './Layout.css';

//rfce react snippets

function Layout(props) {
    // Preluam props-urile de interes.
    const {user, signOut} = props;
    return(
        <div>
            <Header
                user={user}
                signOut={signOut}/>
            {/*Daca intre deschiderea si inchiderea unei componente Layout instantiem mai multe componente ,*/}
            {/*atunci props.children va reprezenta intreaga componenta pasata lui Layout*/}

            {props.children}
            <Footer/>
        </div>
    );
}
export default Layout;