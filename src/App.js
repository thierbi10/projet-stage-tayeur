

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
import Contact from "./pages/Contact/Contact";
import Propos from "./pages/Propos";
import InfoProduit from "./pages/InfoProduits/InfoProduit";
function App() {
  return (
    <div className="App">
        <Navbars/>
          <Routes>
             <Route  path="/" element = {<Accueil />}/>
             <Route  path="/couture" element = {<Couture  />}/>
             <Route  path="/couture/ateliers-info" element = {<InfoAtelier  />}/>
             <Route  path="/produit" element = {<Ateliers />}/>
             <Route  path="/produit/info-produit" element = {<InfoProduit />}/>
             <Route  path="/a-propos-nous" element = {<Propos/>}/>
             <Route  path="/contact" element = {<Contact/>}/>

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
