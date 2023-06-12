import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Destignations from './components/pages/Destignations';
import Signup from './components/pages/Signup';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/products' exact component={Products}/>
            <Route path='/destignations' exact component={Destignations}/>
            <Route path='/signup' exact component={Signup}/>
          </Switch>
          <Footer />
      </Router>
    </>
  );
}

export default App;
