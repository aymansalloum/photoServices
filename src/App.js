import React from 'react'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route   } from 'react-router-dom'
import './App.css';
<<<<<<< HEAD
=======

>>>>>>> c317aac28c2baf5d17938faee4fd2735f7d71a18
function App() {
  return(
    <React.Fragment>
       <Header/>
      <Router>        
       <Switch>
         <Route exact path="/" component={Home}/>          
        </Switch>
        <Footer/>
        </Router>
    </React.Fragment>
);
  }

export default App;
