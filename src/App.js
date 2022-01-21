import React from 'react';
import './App.css';
import {Switch, Route, Router, BrowserRouter, Routes} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Page404 from './pages/Page404';
import Category from "./pages/Category";
// Vom folosi utility-classes in intreaga aplicatie, deci importam
// fisierul in App, pentru a avea vizibilitate globala.
import './utils/utility-classes.css';


class App extends React.Component{
  constructor() {
      super();
      this.state ={};
  }


  render() {

      return(

<div className= "app">
    {/* Pentru a randa O SINGURA PAGINA/COMPONENTA, avem nevoie de Switch */}
    {/* Cum functioneaza Switch? Cand gaseste o ruta(Route) potrivita, afiseaza(randeaza) pagina/componenta aferenta,
        dupa care IGNORA toate celelalte pagini/componente cuprinse in interiorul lui.*/}
      <BrowserRouter>
    <Routes>
        {/* pentru a asocia o pagina unei rute avem doua variante: */}
        {/* 1. (Exemplu comentat): pagina este instantiata drept copil al lui Route */}
        {/* <Route path='/login'>
            <Login/>
          </Route> */}
        {/* 2. Pagina este inclusa in atributul component al lui Route */}
        {/* Atributul path reprezinta ruta, adica ce urmeaza in url, dupa domeniu */}
        <Route path ='/login' element= {Login}/>
        <Route path ='/register' element= {Register}/>
        {/* ATENTIE! Daca uitati atributul "exact", atunci daca path-ul va fi o subruta dintr-o alta ruta
          (ex: "/"" e o subruta a "/login"), Switch-ul VA FACE match pe aceasta ruta si va alege eronat. Exact
          forteaza ruta sa fie exact cea din patch. */}
        <Route exact path='/' element={<Home/>}/>
        <Route path= '/about' element={About}/>
        {/* ATENTIE! Daca utilizatorul navigheaza catre o ruta inexistenta, ii vom afisa pagina de 404.*/}
        {/* Ce vom pune la path? Caracterul '*'! Pentru ca Switch ia rutele in ordine, iar daca nu a gasit nicio ruta valida,
          inseamna ca ORICE ruta a fost introdusa in rest e invalida. Caracterul * tine loc de "orice".*/}
        <Route path= '/category/:categoryName' component={Category}/>
        <Route path= '*' element={Page404} />

      </Routes>
   </BrowserRouter>
</div>
      );
  }
}

export default App;
