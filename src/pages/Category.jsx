import React, {Component} from 'react';
import Layout from '../components/Layout';
//Avemnevoie de fisierul JSON
import products from '../utils/products.json';
import ProductList from '../components/ProductList';


        class Category extends Component{
    constructor(props) {
        super(props);
        this.state={
            category:{},
            // Avem nevoie de itemii categoriei.
            items: []
        }
    }

    componentDidMount() {
        //Daca componenta a fost inclussa intr-o componenta de tip route
        //=>automat in this.props vin 3 atribute,history, location, match
        console.log(this.props);
        //in match gasim parametrii rutei
        const {match} = this.props;
        // Parametri primiti in ruta se gasesc in cheia params, sub numele dat in componenta
        // Route corespunzatoare(din App.js).
        const categoryName = match.params.categoryName;
        // Folosindu-ne de categoria venita din URL, extragem din fisierul JSON doar informatiile
        // necesare acesteia, acualizand state-ul
        this.setState({ category: products[categoryName],
        items:products[categoryName].items
        });
    }

    rander(){
        return(
            //Fiecare paginna cu header si footer trebuie sa aiba continutul incarcat in Layout
            <Layout>
                {/* Pentru a nu a avea o dimensiune prea mare si a fi centrat, continutul
                paginii trebuie introdus intr-un div cu cele doua clase de mai jos. */}
                <div className= "container-fluid container-min-max-width">

                    {/*din categoria curenta afisam numele*/}
                        <h2 className= "mb-5">{this.state.category.name}</h2>
                    {/*Pasam itemii mai departe catre ProductList*/}

                    <ProductList products = {this.state.items} />
                </div>
            </Layout>

        );
       }
        }
            export default Category;