
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.js';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Precios from './components/Precios';
import QueEs from './components/QueEs';
import ComoFunciona from './components/ComoFunciona';
import Form from './components/Form';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Arrow from './components/Arrow';
import Suscrip from './components/Suscrip';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  
return (
<<<<<<< HEAD
    <Router>
      <Navbar />
        <Route exact path="/"component={Main} id="section0"/>
        <Route exact path="/que-es"component={QueEs} id="section1"/>
        <ComoFunciona id="section2"/>
        <Precios id="section3"/>
        <Faq id="section4"/>
        <Form id="section5"/>
      <Switch>
        <Suscrip />
      </Switch>
        <Arrow />
      <Footer />
    </Router>
=======
    <>
      <Router>
          <Route exact strict path="/" component={Navbar}/>
          <Route exact strict path="/" component={Main} id="section0"/>
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
>>>>>>> responsive
  );
}

export default App;
