import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/navbar.component";
import Footer from "./components/footer.component";
import Home from "./components/home.component";
import PostMemes from "./components/postmemes.component";
import ViewMemes from "./components/viewmemes.component";
import RateMemes from "./components/ratememes.component";
import { Redirect } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar first="Home" sec="View Memes" secTo="/view-memes" third="Post Memes" thirdTo="/post-memes" fourth="Rate Memes" fourthTo="/rate-memes" />

      <Route path="/" exact component={Home}></Route>
      <Route path="/view-memes" exact component={ViewMemes}></Route>
      <Route path="/post-memes" exact component={PostMemes}></Route>
      <Route path="/rate-memes" exact component={RateMemes}></Route>
      <Footer />
    </Router>
  );
}

export default App;
