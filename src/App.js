

import Container from "react-bootstrap/Container";

import './App.css';
import Carrousel from './composants/Carrousel/Carrousel';
import Navbars from './composants/Navbars/Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import Couture from "./pages/Couture/Couture";
function App() {
  return (
    <div className="">
      <Navbars/>
      <Carrousel/>
      <Couture/>
    </div>
  );
}

export default App;
