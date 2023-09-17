

import Container from "react-bootstrap/Container";

import './App.css';
import Carrousel from './composants/Carrousel/Carrousel';
import Navbars from './composants/Navbars/Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import Couture from "./pages/Couture/Couture";
import Footer from "./composants/Footer/Footer";
import Ateliers from "./pages/Ateliers/Ateliers";
import Accueil from "./pages/Acceuil/Acceuil";
import InfoAtelier from "./pages/InfoAtelier/InfoAtelier";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Navbars/>
          <Routes>
             <Route  path="/" element = {<Accueil />}/>
             <Route  path="/produit" element = {<Ateliers />}/>
             <Route  path="/couture" element = {<InfoAtelier  />}/>
             <Route  path="atelirs-info" element = {<Couture/>}/>

             {/* <Route  path="/Produits" element = {<Produits />}/> */}
             {/* <Route  path="/contact" element = {<Contact />}/> */}
          </Routes>


        {/* <InfoAtelier/>
       <Carrousel/>
       <Couture/>
       <Footer/>  */}
       {/* <Ateliers/>  */}
    </div>
  );
}

export default App;
