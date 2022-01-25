
import {Link} from 'react-router-dom';
import React from 'react';
//importam componente noi
import Logo from '../assets/images/logo.png';
import {ReactComponent as Google } from '../assets/icons/google.svg';
import './Login.css'

//Atentie! Cu toate ca Login are constante si functii,
// nu este nevoie sa fie declarata class pt ca nu are un state propriu

function Login(props) {
    //daca nu suntem siguri ce props-uri vin, le dam console.log

    console.log(props);
    //facem destructuring la propsurile de care avem nevoie
    //singInWithGoogle vine de la Firebase, history de la componenta Route.
    const  { signInWithGoogle, history } = props;
    //Functia care va fi apelata  la click-ul pe butonul de logare cu google
    function handleGoogleLogin(){
        //Apelul functiei SignInWhitGoogle intoarce un promise
        const googleLoginResponse = signInWithGoogle();
        //In caz de succes, promise-ul va intra pe metoda .then
        //.then se executa cand Promisul a fost rezolvat (a iesit din starea de peding)
        //daca logarea ar esua,ar intra pe .catch
        googleLoginResponse.then(() => {
           //abia dupa ce s-a terminat logare trebuie sa fin redirectionati catre home
           //cu history.push schimbam ruta
           history.push('/');
        });
    }
    return (
        <div className= "login-page">
            {/*Logo-ul duce catre home*/}
        <Link to= '/'>
    <img src= {Logo} alt = "logo" className= "mb-5"/>
        </Link>
            <h1 className= " h2 ">Login</h1>
            <p>Alege providerul cu care vrei sa te loghezi:</p>
           <button
               //clase sunt de bootstrap
            className= " btn btn-outline-dark d-flex aling-item-center"
            // la click apelam functia handleGoogleLogin
           onClick={handleGoogleLogin}
           >
               <Google className = "w-50 mr-3"/>
               {/*text-nowrap nu lasa textul sa se intinde pe mai multe randuri*/}
               <span className= "text-nowrap">Logeaza-te cu Google </span>


           </button>
        </div>
    );
}

export default Login;

