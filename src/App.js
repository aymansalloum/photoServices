import React from 'react'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route   } from 'react-router-dom'
import './App.css';

function App() {
  return(
    <React.Fragment>
       <Header/>
      <Router>        
       <Switch>
         <Route exact path="/" component={Home}/>          
        </Switch>
        </Router>
    </React.Fragment>
);
  }

export default App;
