import './App.js';
import Navbar from './components/nav/Navbar';
import Main from './components/Main';
import Precios from './components/Precios';
import QueEs from './components/QueEs';
import ComoFunciona from './components/ComoFunciona';
import Form from './components/Form';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Arrow from './components/Arrow';
import Suscrip from './components/Suscrip';
import Clientes from './components/Clientes';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  
return (
    <>
      <Router>
          <Route exact strict path="/" component={Navbar}/>
          <Route exact strict path="/" component={Main} id="section0"/>
          <Route exact strict path="/" component={Clientes}/>
          <Route exact strict path="/" component={QueEs} id="section1"/>
          <Route exact strict path="/" component={ComoFunciona} id="section2"/>
          <Route exact strict path="/" component={Precios} id="section3"/>
          <Route exact strict path="/" component={Faq} id="section4"/>
          <Route exact strict path="/" component={Form} id="section5"/>
          <Route exact strict path="/" component={Footer}/>
          <Route exact strict path="/" component={Arrow}/>
          <Route exact strict path="/suscripcion" component={Suscrip}/>
      </Router>
    </>
  );
}

export default App;
