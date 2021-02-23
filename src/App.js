import './App.js';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Precios from './components/Precios';
import QueEs from './components/QueEs';
import ComoFunciona from './components/ComoFunciona';
import FormX from './components/FormX';
import FaqX from './components/FaqX';
import Footer from './components/Footer';
import Arrow from './components/Arrow';
import Suscrip from './components/Suscrip';
import Clientes from './components/Clientes';
import Error from './components/Error';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
            <Route exact strict path="/" component={FaqX} id="section4"/>
            <Route exact strict path="/" component={FormX} id="section5"/>
           <Route exact strict path="/" component={Footer}/>
           {/*<Switch>
            <Route exact strict path="/" component={Arrow}/>
            <Route exact strict path="/suscripcion" component={Suscrip}/>
            <Route component={Error}/>
          </Switch> */}
      </Router>
    </>
  );
}

export default App;
